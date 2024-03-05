import React from "react"
import style from "../products.module.css"
import { editServices } from "@/app/app"

const serviceMaintain = async ({params}) => {

    const res= await fetch('http://localhost:3000/api/getservice/'+ params.servicesId,{
        next: {revalidate:1}
    })
    const service = await res.json()

    return (
        <div>
             <div className="divider text-xl">รายละเอียดสินค้า</div>
                
                <div className="text-xl">{"ชื่อบริการ : " + service[0].service_name}</div>
                <div className="text-xl">{"ราคาบริการโดยเฉลี่ย : " + service[0].service_avg_price}</div>
            
            <div className="divider text-xl"></div>
            <div className="divider text-xl">ปรับแต่งข้อมูลการบริการ</div>

            <form className={style.content} action={editServices}>
                <span class="label-text">รหัสการบริการ (ไม่สามารถปรับได้)</span>
                <br/>
                <input type="number" name="id" value={service[0].service_id} className="input input-bordered w-full max-w-xs" readOnly/>
                <br/>
                <span class="label-text">ชื่อบริการ</span>
                <br/>
                <input type="text" name="name" defaultValue={service[0].service_name} className="input input-bordered w-full max-w-xs" required/>
                <br/>
                <span class="label-text">ราคาบริการโดยเฉลี่ย (บาท)</span>
                <br/>
                <input type="number" name="price" defaultValue={service[0].service_avg_price} className="input input-bordered w-full max-w-xs" required/>
                <button className="btn glass btn-block text-xl">Confirm ปรับแต่งบริการ</button> 
            </form>
            <div className="divider ">คำเตือน</div>
            <div>เมื่อกด Confirm ปรับแต่งแล้ว ทางระบบจะใช้เวลาในการปรับแต่งซักครู่ โปรดกดรีเฟรชหน้าจัดการ (f5) แล้วจึงเช็คว่าข้อมูลของท่านถูกปรับแต่งแล้วหรือยังในแทบรายการบริการทางด้านซ้าย</div>
            <div className="divider text-xl"></div>
        </div>
    )
}

export default serviceMaintain