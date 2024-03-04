import React from "react"
import style from "../products.module.css"
import { editProduct } from "@/app/app"

const productMaintain = async ({params}) => {

    const res= await fetch('http://localhost:3000/api/getemployee/'+params.employeeId,{
        next: {revalidate:1}
    })
    const employee = await res.json()

    return (
        <div>
             <div class="divider text-xl">พนักงานที่เลือก</div>
                
                <div class="text-xl">{"ชื่อ : " + employee[0].em_name}</div>
                <div class="text-xl">{"ที่อยู่ : " + employee[0].em_address}</div>
                <div class="text-xl">{"Email: " + employee[0].em_phone}</div>
                <div class="text-xl">{"Phone: " + employee[0].em_email}</div>
            
            <div class="divider text-xl"></div>
            
        </div>
    )
}

export default productMaintain