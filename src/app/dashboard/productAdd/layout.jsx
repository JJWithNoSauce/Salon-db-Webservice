import style from "./products.module.css"
import Link from 'next/link'
import { addProduct } from "@/app/app"

 export async function Layout(){
    'use server'

    return (
        <div className="form-control">
            <div>
            <Link href={"/dashboard/productMaintain"}>
                <button className="btn btn-square btn-outline">
                    กลับ
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </Link>
            <div className="divider text-xl">เพิ่มสินค้า</div>

            </div>
            <form action={addProduct}>
                <span class="label-text">ชื่อสินค้า</span>
                <br/>
                <input type="text" name="name" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                <br/>
                <span class="label-text">ขนาดสินค้า</span>
                <br/>
                <input type="text" name="size" placeholder="Size" className="input input-bordered w-full max-w-xs" />
                <br/>
                <span class="label-text">ประเภทสินค้า</span>
                <br/>
                <input type="text" name="type" placeholder="Type" className="input input-bordered w-full max-w-xs" />
                <br/>
                <span class="label-text">จำนวณสินค้า</span>
                <br/>
                <input type="number" name="amount" placeholder="Amount" className="input input-bordered w-full max-w-xs" />
                <br/>
                <span class="label-text">ราคาสินค้า</span>
                <br/>
                <input type="number" name="price" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                <br/>

                <button className="btn glass btn-block text-xl" type="submit" href={"/dashboard/productMaintain"}>
                    Confirm เพิ่มสินค้า
                </button>
            </form>

            <div className="divider">เมื่อกรอกข้อมูลเสร็จสิ้นโปรดกดปุ่ม Confirm เพื่อเพิ่มสินค้า</div>
            <div>โดยเมื่อกดปุ่มแล้วทางระบบจะเพิ่มข้อมูลเข้าโดยอัตโนมัติแบบไม่แจ้งเตือน โปรดกดปุ่มกลับไปยังหน้าจัดการแล้วรีเฟรชหน้าจัดการ (f5) เพื่อเช็คว่าข้อมูลถูกเพิ่มหรือไม่ หากยังไม่ถูกเพิ่มทางระบบอาจกำลังอยู่ในขั้นตอนกระบวนการ หากไม่เพิ่มเลยโปรดเช็คว่าข้อมูลที่กรอกไปนั้นถูกต้องและไม่ซ้ำกับข้อมูลสินค้าอื่นๆ</div>
            <div className="divider"></div>
        </div>
    )
}

export default Layout