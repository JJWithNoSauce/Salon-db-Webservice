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
             <div class="divider text-xl">รายละเอียดสินค้า</div>
                
                <div class="text-xl">{"ชื่อสินค้า : " + product[0].product_name}</div>
                <div class="text-xl">{"ขนาดสินค้า: " + product[0].product_size}</div>
                <div class="text-xl">{"ประเภทสินค้า : " + product[0].product_type}</div>
                <div class="text-xl">{"จำนวนสินค้า : " + product[0].product_amount}</div>
                <div class="text-xl">{"ราคาสินค้า : " + product[0].product_price}</div>
            
            <div class="divider text-xl"></div>
            <div class="divider text-xl">ปรับแต่งข้อมูลสินค้า</div>

            <form className={style.content} action={editProduct}>
                <input type="number" name="id" value={product[0].product_id} class="input input-bordered w-full max-w-xs" readOnly/>
                <input type="text" name="name" defaultValue={product[0].product_name} class="input input-bordered w-full max-w-xs" required/>
                <input type="text" name="size" defaultValue={product[0].product_size} class="input input-bordered w-full max-w-xs" required/>
                <input type="text" name="type" defaultValue={product[0].product_type} class="input input-bordered w-full max-w-xs" required/>
                <input type="number" name="amount" defaultValue={product[0].product_amount} class="input input-bordered w-full max-w-xs" required/>
                <input type="number" name="price" defaultValue={product[0].product_price} class="input input-bordered w-full max-w-xs" required/>
                <input type="number" name="em_Id" placeholder="Employee id" class="input input-bordered w-full max-w-xs" required/>
                <button class="btn glass btn-block text-xl">Confirm ปรับแต่ง</button> 
            </form>
            
            
        </div>
    )
}

export default productMaintain