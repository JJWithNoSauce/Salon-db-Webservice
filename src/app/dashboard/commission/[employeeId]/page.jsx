import React from "react"
import { updateCalCom } from "@/app/app"
import style from "../products.module.css"

const productMaintain = async ({params}) => {

    const res= await fetch('http://localhost:3000/api/getemployee/'+params.employeeId,{
        next: {revalidate:1}
    })
    const employee = await res.json()

    return (
        <div>

             <div class="divider text-xl">พนักงานที่เลือก</div>
                <div class="text-xl">{"พนักงานที่ถูกเลือก : " + employee[0].em_name}</div>
            
            

            <form action={updateCalCom}>   
                <div class="text-xl">{"รหัสพนักงาน : "}
                    <input type="text" name="em_id" defaultValue = {params.employeeId} class="input input-bordered w-full max-w-xs"/>
                </div>
            
            <div class="divider text-xl">วันเริ่มคำนวณ</div>
                <input type="date" name="Start Date" class="input input-bordered w-full max-w-xs" />
                <input type="time" name="Start Time" class="input input-bordered w-full max-w-xs" />

            <div class="divider text-xl">วันสิ้นสุดคำนวณ</div>

            
                <input type="date" name="End Date" class="input input-bordered w-full max-w-xs" />
                <input type="time" name="End Time" class="input input-bordered w-full max-w-xs" />
            
            <div class="divider text-xl"></div>
                <button class="btn glass btn-block text-xl">Confirm กำหนดวัน</button>
            <div class="divider text-xl"></div>
            </form>

            <button class="btn glass btn-block text-xl">เริ่มคำนวณ</button>
            <div class="divider text-xl"></div>
        </div>
    )
}

export default productMaintain