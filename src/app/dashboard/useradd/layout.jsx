import style from "./user.module.css"
import Link from 'next/link'
import { addEmployee } from "@/app/app"

 export async function Layout(){
    'use server'

    return (
        <div className="form-control">
            <div>

            <Link href={"/dashboard/usersMaintain"}>
                <button class="btn btn-square btn-outline">
                    กลับ
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </Link>
            <div className="divider text-xl">เพิ่มพนักงาน</div>

            </div>
            <form action={addEmployee}>
                <span class="label-text">ชื่อของพนักงาน</span>
                <br/>
                <input type="text" name="name" placeholder="Name" class="input input-bordered w-full max-w-xs" />
                <br/>
                <span class="label-text">ที่อยู่ของพนักงาน</span>
                <br/>
                <input type="text" name="address" placeholder="Address" class="input input-bordered w-full max-w-xs" />
                <br/>
                <span class="label-text">E-mail ของพนักงาน</span>
                <br/>
                <input type="email" name="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                <br/>
                <span class="label-text">เบอร์โทรศัพท์ของพนักงาน</span>
                <br/>
                <input type="Phone" name="phone" placeholder="Phone" class="input input-bordered w-full max-w-xs" />
                <br/>

                <button class="btn glass btn-block text-xl" type="submit" href={"/dashboard/usersMaintain"}>
                    Confirm เพิ่มพนักงาน
                </button>
            </form>

            <div className="divider">เมื่อกรอกข้อมูลเสร็จสิ้นโปรดกดปุ่ม Confirm เพื่อเพิ่มพนักงาน</div>
            <div>โดยเมื่อกดปุ่มแล้วทางระบบจะนำข้อมูลเข้าโดยอัตโนมัติแบบไม่แจ้งเตือน โปรดกดปุ่มกลับไปยังหน้าจัดการแล้วรีเฟรชหน้าจัดการ (f5) เพื่อเช็คว่าข้อมูลถูกเพิ่มหรือไม่ หากยังไม่ถูกเพิ่มทางระบบอาจกำลังอยู่ในขั้นตอนกระบวนการ หากไม่ถูกเพิ่มเลยโปรดเช็คว่าข้อมูลที่กรอกไปนั้นถูกต้องและไม่ซ้ำกับข้อมูลพนักงานคนไหน</div>
            <div className="divider"></div>
        </div>
    )
}

export default Layout