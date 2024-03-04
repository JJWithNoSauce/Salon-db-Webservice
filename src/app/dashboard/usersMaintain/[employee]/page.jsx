import React from "react"
import style from "../user.module.css"
import { editProduct } from "@/app/app"

const productMaintain = async ({params}) => {

    const res= await fetch('http://localhost:3000/api/getemployee/'+params.productid,{
        next: {revalidate:1}
    })
    const product = await res.json()

    return (
        <div>
             <div class="divider text-xl">รายละเอียดสินค้า</div>
                
                <div class="text-xl">{"ชื่อ : " + employee[0].employee_fname}</div>
                <div class="text-xl">{"นามสกุล : " + employee[0].employee_lname}</div>
                <div class="text-xl">{"Email: " + employee[0].employee_email}</div>
                <div class="text-xl">{"Phone: " + employee[0].employee_phone}</div>
                <div class="text-xl">{"บริการ : " + employee[0].employee_service}</div>
                <div class="text-xl">{"เงินเดือน : " + employee[0].employee_salary}</div>
            
            <div class="divider text-xl"></div>
            <div class="divider text-xl">ปรับแต่งข้อมูลสินค้า</div>

            <form className={style.content} action={editProduct}>
                <input type="number" name="id" value={employee[0].employee_id} class="input input-bordered w-full max-w-xs" readOnly/>
                <input type="text" name="fname" defaultValue={employee[0].employee_fname} class="input input-bordered w-full max-w-xs" required/>
                <input type="text" name="lname" defaultValue={employee[0].employee_lname} class="input input-bordered w-full max-w-xs" required/>
                <input type="text" name="type" defaultValue={employee[0].employee_email} class="input input-bordered w-full max-w-xs" required/>
                <input type="number" name="amount" defaultValue={employee[0].employee_phone} class="input input-bordered w-full max-w-xs" required/>
                <input type="number" name="price" defaultValue={ employee[0].employee_salary} class="input input-bordered w-full max-w-xs" required/>
                <input type="number" name="em_Id" placeholder="Employee id" class="input input-bordered w-full max-w-xs" required/>
                <button class="btn glass btn-block text-xl">Confirm ปรับแต่ง</button> 
            </form>
            
            
        </div>
    )
}

export default productMaintain