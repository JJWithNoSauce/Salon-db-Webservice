import React from "react"
import style from "../user.module.css"
import { editEmployee, addSkill } from "@/app/app"
import { db, ssh } from "@/app/db"

const userMaintain = async ({params}) => {

    const res= await fetch('http://localhost:3000/api/getemployee/'+params.employee,{
        next: {revalidate:1}
    })
    const employee = await res.json()

    const client = await db(); 
    const skill = await new Promise((resolve, reject) => {
      client.query('SELECT * FROM Service', (error, results, fields) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });

    console.log(skill)

    return (
        <div>
             <div class="divider text-xl">รายละเอียดพนักงาน</div>
                
                <div class="text-xl">{"ชื่อ : " + employee[0]?.em_name}</div>
                <div class="text-xl">{"ที่อยู่ : " + employee[0]?.em_address}</div>
                <div class="text-xl">{"Email: " + employee[0]?.em_phone}</div>
                <div class="text-xl">{"Phone: " + employee[0]?.em_email}</div>
            
            <div class="divider text-xl"></div>
            <div class="divider text-xl">ปรับแต่งข้อมูลพนักงาน</div>

            <form className={style.content} action={editEmployee}>
                <input type="number" name="id" value={employee[0].em_id} class="input input-bordered w-full max-w-xs" readOnly/>
                <br />
                <input type="text" name="name" defaultValue={employee[0].em_name} class="input input-bordered w-full max-w-xs" required />
                <br/>
                <input type="text" name="address" defaultValue={employee[0].em_address} class="input input-bordered w-full max-w-xs" required />
                <br/>
                <input type="email" name="email" defaultValue={employee[0].em_email} class="input input-bordered w-full max-w-xs" required />
                <br/>
                <input type="Phone" name="phone" defaultValue={employee[0].em_phone} class="input input-bordered w-full max-w-xs" required />
                <br/>
                <button class="btn glass btn-block text-xl">Confirm ปรับแต่ง</button> 
            </form>
            <div class="divider text-xl"></div>
            <div class="divider text-xl">เพิ่มความสามารถ</div>
            <form action={addSkill}>
                <input type="number" name="id" value={employee[0].em_id} class="input input-bordered w-full max-w-xs" readOnly/>
                <br />
                <input type="text" name="skillid" placeholder="ใส่รหัสความสามารถ" class="input input-bordered w-full max-w-xs" required/>
                <br />
                <button type="submit" className='btn'>ยืนยันการปรับแต่ง</button>
            </form>   
        </div>
    )
}

export default userMaintain