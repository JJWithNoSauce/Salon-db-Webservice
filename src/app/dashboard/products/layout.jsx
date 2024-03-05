"use client"

import { useEffect } from "react"
import Link from 'next/link'

import style from "./products.module.css";
import { useState } from "react";


const getCurrentDateTime = () => {
    const currentDate = new Date();
  
    // Adjust timezone to GMT+7
    const offset = 7 * 60; // Offset in minutes
    const offsetMilliseconds = offset * 60 * 1000;
    const adjustedDate = new Date(currentDate.getTime() + offsetMilliseconds);
  
    const formattedDateTime = adjustedDate.toISOString().slice(0, 19).replace('T', ' ');
  
    return formattedDateTime;
  };
  


const billing = async (formData,order,sum)=>{
    let count = await fetch('http://localhost:3000/api/getCount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id:'productbilling_id',
          table:'ProductBilling'
        })
      })

    count = await count.json()
    count = parseInt(count)+1
    let date = getCurrentDateTime()
    
    await fetch('http://localhost:3000/api/buyproduct/bill', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ProductBilling_id: count, 
          Cus_phone: formData.get("cus_phone"), 
          ProductBillingDate: date, 
          Em_id: formData.get('em_id') ,
          Revenue: sum
        })
      });

    order.map(async(cat) =>{
        await fetch('http://localhost:3000/api/buyproduct/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ProductBilling_id: count, 
            product_id: cat.product_id, 
            productorder_amount: cat.quantity, 
            productorder_totalprice: cat.quantity * cat.product_price 
        })
        });

    })
    
}


const Layout = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [amount, setAmount] = useState(1); // Define amount state

    const handleAddToCart = (product, quantity) => {
        // Add product to cart with specified quantity
        const newProduct = { ...product, quantity };
        setCart(prevCart => [...prevCart, newProduct]);
        // Reset amount to 1 after adding to cart
        setAmount(1);
    };

    const handleRemoveFromCart = (productId) => {
        // Remove product from cart
        const updatedCart = cart.filter(item => item.product_id !== productId);
        setCart(updatedCart);
    };

    const fetchProducts = async () => {
        const res = await fetch('http://localhost:3000/api/getproduct');
        const products = await res.json();
        return products;
    };

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts()
            .then(products => setProducts(products))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const sumPrice = cart.reduce((total, item) => {
        // Check if item.product_price and item.quantity are valid numbers
        const price = Number(item.product_price);
        const quantity = Number(item.quantity);
    
        // If price or quantity is NaN, return the current total without modifying it
        if (isNaN(price) || isNaN(quantity)) {
            return total;
        }
    
        // Calculate the subtotal for this item and add it to the total
        const subtotal = price * quantity;
        return total + subtotal;
    }, 0);
    

    return (
        <div className={style.container}>
            <div className={style.list}>
                <ul>
                    <div className="divider text-xl">รายการสินค้า</div>
                    {products.map((product) => (
                        <li key={product.product_name}>
                            <div>
                                {product.product_type + ' ' + product.product_name + ' ขนาด ' + product.product_size}
                                <br />
                                <div>{product.product_price} บาท</div>
                            </div>
                            <div>
                                <form onSubmit={(event) => { event.preventDefault(); handleAddToCart(product, amount); }}>
                                    <input type="number" min="1" defaultValue={amount} onChange={(e) => setAmount(parseInt(e.target.value))} />
                                    <button type="submit" className="btn btn-outline btn-success text-xl">
                                        add
                                    </button>
                                </form>
                                <div className="divider"></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <div className="divider text-xl">บิล</div>
                <ul>
                    {cart.map((item) => (
                        <li key={item.product_id}>
                            <div className={style.sumlist}>{item.product_type +" " + item.product_name + " "+item.product_size}: {item.product_price} บาท</div>
                            <div className={style.sumlist}>จำนวน: {item.quantity} ชิ้น</div>
                            <div className={style.sumlist}>{"ราคารวม: " + (item.product_price * item.quantity) + " บาท"}</div>
                            <form>
                                <button formAction={() => handleRemoveFromCart(item.product_id)} className="btn">Remove</button>
                            </form>
                            
                            <div className="divider"></div>
                        </li>
                    ))}
                    <div className="divider">รวมยอด</div>
                    <div className={style.sumlist}>{sumPrice} บาท</div>
                    <div className="divider"></div>
                    <form action={ (e) => {billing(e,cart,sumPrice)}}>
                        <span class="label-text">ชื่อพนักงานผู้ให้บริการ</span>
                        <br/>
                        <input type="number" name="em_id" placeholder="Employee id" className="input input-bordered w-full max-w-xs" required/>
                        <br/>
                        <span class="label-text">เบอร์โทรศัพท์ลูกค้า</span>
                        <br/>
                        <input type="text" name="cus_phone" placeholder="Customer Phone" className="input input-bordered w-full max-w-xs" required/>
                        <br/>
                        <br/>
                        <button className="btn">Checkout!</button>
                    </form>
                    
                </ul>
            </div>
        </div>
    );
};

export default Layout;
