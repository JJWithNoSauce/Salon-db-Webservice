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
             <div clasNames="divider text-xl">พนักงานที่เลือก</div>
                
                <div className="text-xl">{"ชื่อพนักงาน : " + employee[0].em_name}</div>
            
            <div className="divider text-xl"></div>
            
        </div>
    )
}

export default productMaintain