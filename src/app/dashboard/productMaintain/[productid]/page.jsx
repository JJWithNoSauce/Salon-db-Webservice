import React from "react"
import style from "../products.module.css"
import { editProduct } from "@/app/app"

const productMaintain = async ({params}) => {

    const res= await fetch('http://localhost:3000/api/getproduct/'+params.productid,{
        next: {revalidate:1}
    })
    const product = await res.json()

    return (
        <div>
             <div className="divider text-xl">รายละเอียดสินค้า</div>
                
                <div className="text-xl">{"ชื่อสินค้า : " + product[0].product_name}</div>
                <div className="text-xl">{"ขนาดสินค้า: " + product[0].product_size}</div>
                <div className="text-xl">{"ประเภทสินค้า : " + product[0].product_type}</div>
                <div className="text-xl">{"จำนวนสินค้า : " + product[0].product_amount}</div>
                <div className="text-xl">{"ราคาสินค้า : " + product[0].product_price}</div>
            
            <div className="divider text-xl"></div>
            <div className="divider text-xl">ปรับแต่งข้อมูลสินค้า</div>

            <form className={style.content} action={editProduct}>
                <span class="label-text">รหัสสินค้า (ไม่สามารถเปลี่ยนได้)</span>
                <input type="number" name="id" value={product[0].product_id} className="input input-bordered w-full max-w-xs" readOnly/>
                <br/>
                <span class="label-text">ชื่อสินค้า</span>
                <br/>
                <input type="text" name="name" defaultValue={product[0].product_name} className="input input-bordered w-full max-w-xs" required/>
                <br/>
                <span class="label-text">ขนาดสินค้า</span>
                <br/>
                <input type="text" name="size" defaultValue={product[0].product_size} className="input input-bordered w-full max-w-xs" required/>
                <br/>
                <span class="label-text">ประเภทสินค้า</span>
                <br/>
                <input type="text" name="type" defaultValue={product[0].product_type} class="input input-bordered w-full max-w-xs" required/>
                <br/>
                <span class="label-text">จำนวนสินค้า</span>
                <br/>
                <input type="number" name="amount" defaultValue={product[0].product_amount} className="input input-bordered w-full max-w-xs" required/>
                <br/>
                <span class="label-text">ราคาสินค้า (บาท)</span>
                <br/>
                <input type="number" name="price" defaultValue={product[0].product_price} className="input input-bordered w-full max-w-xs" required/>
                <button className="btn glass btn-block text-xl">Confirm ปรับแต่ง</button> 
            </form>
            <div className="divider text-xl"></div>
            
            
        </div>
    )
}

export default productMaintain