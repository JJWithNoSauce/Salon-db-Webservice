import React from "react"
import style from "../user.module.css"
import { editProduct } from "@/app/app"
import { db, ssh } from "@/app/db"

const productMaintain = async ({ params }) => {

    const id_query = Number(params.employee)

    const res= await fetch('http://localhost:3000/api/getemployee/'+Number(params.employee),{
        next: {revalidate:1}
    })
    const employee = await res.json()

    const client = await db(); 
    const skill = await new Promise((resolve, reject) => {
      client.query('SELECT service_name from Employee, EmployeeSkill, Service WHERE Employee.em_id = EmployeeSkill.em_id AND EmployeeSkill.service_id = Service.service_id AND Employee.em_id = '+id_query, (error, results, fields) => {
        if (error) {
          reject(error);
          return;
            }
            resolve(results);
        });
        });
        ssh.close();

    console.log(skill)

    return (
        <div>
             <div class="divider text-xl">พนักงานที่เลือก</div>
                
                <div class="text-xl">{"ชื่อ : " + employee[0].em_name}</div>
                <div class="text-xl">{"ที่อยู่ : " + employee[0].em_address}</div>
                <div class="text-xl">{"Email: " + employee[0].em_phone}</div>
                <div class="text-xl">{"Phone: " + employee[0].em_email}</div>
            
            <div class="divider text-xl"></div>
            <div class="divider text-xl">ความสามารถ</div>
            <div>
                {skill.map(item=>(
                    <div key={item.service_name}>
                            <h2>{item.service_name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default productMaintain