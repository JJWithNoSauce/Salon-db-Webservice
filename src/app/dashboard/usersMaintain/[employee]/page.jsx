import React from "react"
import style from "../user.module.css"
import { editProduct } from "@/app/app"

const userMaintain = async ({params}) => {

    const res= await fetch('http://localhost:3000/api/getemployee/'+params.productid,{
        next: {revalidate:1}
    })
    const employee = await res.json()

    return (
        <div>
             <div class="divider text-xl">รายละเอียดพนักงาน</div>
                
                <div class="text-xl">{"ชื่อ : " + employee[0].em_name}</div>
                <div class="text-xl">{"ที่อยู่ : " + employee[0].em_address}</div>
                <div class="text-xl">{"Email: " + employee[0].em_phone}</div>
                <div class="text-xl">{"Phone: " + employee[0].em_email}</div>
                <div class="text-xl">{"บริการ : " + employee[0].employee_service}</div>
                <div class="text-xl">{"เงินเดือน : " + employee[0].employee_salary}</div>
            
            <div class="divider text-xl"></div>
            <div class="divider text-xl">ปรับแต่งข้อมูลพนักงาน</div>

            <form className={style.content} action={editProduct}>
            <input type="text" name="name" placeholder="Name" class="input input-bordered w-full max-w-xs" required />
                <br/>
                <input type="text" name="address" placeholder="Address" class="input input-bordered w-full max-w-xs" required />
                <br/>
                <input type="email" name="email" placeholder="Email" class="input input-bordered w-full max-w-xs" required />
                <br/>
                <input type="Phone" name="Phone" placeholder="Phone" class="input input-bordered w-full max-w-xs" required />
                <br/>
                <input type="text" name="service" placeholder="Service" class="input input-bordered w-full max-w-xs" required />
                <br/>
                <input type="number" name="salary" placeholder="Salary" class="input input-bordered w-full max-w-xs" required />
                <br/>
                <button class="btn glass btn-block text-xl">Confirm ปรับแต่ง</button> 
            </form>
            
            
        </div>
    )
}

export default userMaintain