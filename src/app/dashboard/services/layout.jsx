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
  

  const billing = async (formData,order,pro)=>{
    let count = await fetch('http://localhost:3000/api/getCount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id:'servicebilling_id',
          table:'ServiceBilling'
        })
      })

    count = await count.json()
    count = parseInt(count)+1
    let date = getCurrentDateTime()
    
    await fetch('http://localhost:3000/api/buyservice/bill', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          servicebilling_id: count, 
          cus_phone: formData.get("cus_phone"), 
          servicebilling_date: date, 
          em_id: order[0].em_id ,
          ServiceBillingTotalRevenue: formData.get("price")
        })
      });

    order.map(async(cat) =>{
        await fetch('http://localhost:3000/api/buyservice/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            servicebilling_id: count, 
            service_id: pro.service_id, 
            service_order_revenue: formData.get("price")
        })
        });

    })
    
}



const Layout = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [amount, setAmount] = useState({}); // Define amount state

    const handleAddToCart = (product) => {

        setCart([product]);

    };

    const handleRemoveFromCart = (productId) => {
        // Remove product from cart
        const updatedCart = cart.filter(item => item.product_id !== productId);
        setCart(updatedCart);
    };

    const fetchProducts = async () => {
        const res = await fetch('http://localhost:3000/api/getservice');
        const products = await res.json();
        return products;
    };

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts()
            .then(products => setProducts(products))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const fetchEmployee = async (em_id) => {
        const res = await fetch('http://localhost:3000/api/getEmployeeSkill', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              service_id:em_id
            })
            });
      
          const resultEmployee = await res.json();
        return resultEmployee;
    };

    const [employees, setEmployees] = useState([]);

    const handle_em = async(ser) => {
        setAmount(ser)
        const newem = await fetchEmployee(ser.service_id);
        setEmployees(newem)
    };


    return (
        <div className={style.container}>

            <div className={style.list}>
                <ul>
                    <div className="divider text-xl">รายการบริการ</div>
                    {products.map((product) => (
                        <li key={product.service_name}>
                            <div>
                                {product.service_name}
                                <br />
                                <div>ราคาเฉลี่ย {product.service_avg_price} บาท</div>
                            </div>
                            <div>
                                <form action={(event) => {handle_em(product) }} onAc>
                                    <button type="submit" className="btn btn-outline btn-success text-xl">
                                        select
                                    </button>
                                </form>
                                <div className="divider"></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={style.list}>
                <ul>
                    <div className="divider text-xl">รายการช่าง</div>
                    {employees.map((product) => (
                        <li key={product.em_id}>
                            <div>
                                {product.em_name}
                                <br />
                            </div>
                            <div>
                                <form onSubmit={(event) => { event.preventDefault(); handleAddToCart(product);}}>
                                    <button type="submit" className="btn btn-outline btn-success text-xl">
                                        select
                                    </button>
                                </form>
                                <div className="divider"></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            

            <div>
                <div className="divider text-xl">รายละเอียดบริการ</div>
                <ul>
                    {cart.map((item) => (
                        <li key={item.product_id}>
                            <div className={style.sumlist}>{amount.service_name}</div>
                            <div className={style.sumlist}>ช่าง : {item.em_name} </div>
                            
                            <div className="divider"></div>
                        </li>
                    ))}
                    <div className="divider">ข้อมูลการบริการ</div>
                    <form action={ (e) => {billing(e,cart,amount)}}>
                        <span class="label-text">เบอร์โทรศัพท์ลูกค้า</span>
                        <br/>
                        <input type="text" name="cus_phone" placeholder="Customer Phone" className="input input-bordered w-full max-w-xs" required/>
                        <br/>
                        <span class="label-text">ราคาบริการจริง</span>
                        <br/>
                        <input type="number" name="price" placeholder="Summarized Price" className="input input-bordered w-full max-w-xs" required/>
                        <br/>
                        
                        <button className="btn btn-glass">Checkout!</button>
                    </form>
                    <div className="divider"></div>
                    
                </ul>
            </div>
        </div>
    );
};

export default Layout;
