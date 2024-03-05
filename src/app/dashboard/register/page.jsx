import { addCustomer } from "@/app/app"
import Link from "next/link"

export default function detail(){
    
    return(
        <> 
            <div>
            <div className="divider text-xl">ลงทะเบียนลูกค้า</div>
            <form action={addCustomer}>
            
                <span class="label-text">เบอร์โทรศัพท์ลูกค้า</span>
                <br />
                <input name="phone" type="text" placeholder="กรอกเบอร์โทร" className="input input-bordered w-full max-w-xs"/>
                <br />
                <span class="label-text">ชื่อ-สกุล ลูกค้า</span>
                <br />
                <input name="name" type="text" placeholder="กรอกชื่อ-นามสกุล" className="input input-bordered w-full max-w-xs"/>
                <br />
                <button className="btn" type="submit" href={"/dashboard/register/success"}>
                    ตกลง
                </button>
                <div className="divider">เมื่อกรอกข้อมูลเสร็จสิ้นโปรดกดปุ่ม ตกลง ลงทะเบียนลูกค้า</div>
                <div>โดยเมื่อกดปุ่มแล้วทางระบบจะนำข้อมูลเข้าโดยอัตโนมัติแบบไม่แจ้งเตือน โปรดกดปุ่มกลับไปยังหน้าจัดการแล้วรีเฟรชหน้าจัดการ (f5) เพื่อเช็คว่าข้อมูลถูกเพิ่มหรือไม่ หากยังไม่ถูกเพิ่มทางระบบอาจกำลังอยู่ในขั้นตอนกระบวนการ หากไม่เพิ่มเลยโปรดเช็คว่าข้อมูลที่กรอกไปนั้นถูกต้องและไม่ซ้ำกับข้อมูลลูกค้าผู้อื่น</div>
                <div className="divider"></div>
            </form>
            </div>
        </>
    )
}
