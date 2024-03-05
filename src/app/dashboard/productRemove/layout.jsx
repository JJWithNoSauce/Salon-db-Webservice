import style from "./products.module.css"
import Link from 'next/link'
import { delProduct } from "@/app/app"

const Layout = ({children}) => {
    return (
        <div className="form-control">
            <div>
            <Link href={"/dashboard/productMaintain"}>
                <button className="btn btn-square btn-outline">
                    กลับ
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </Link>
            <div className="divider text-xl">ลบสินค้า</div>

            </div>
            <form action={delProduct}>
                <span class="label-text">ชื่อสินค้า</span>
                <br/>
                <input type="text" name="product_name" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                <br/>
                <span class="label-text">ขนาดสินค้า</span>
                <br/>
                <input type="text" name="product_size" placeholder="Size" className="input input-bordered w-full max-w-xs" />
                <br/>
                <br/>
                <button className="btn glass btn-block text-xl">
                    Confirm ลบสินค้า
                </button>
            </form>

            <div className="divider">โปรดกรอกชื่อสินค้าแล้วกด Confirm เพื่อลบสินค้านั้นๆ</div>
            <div>โดยเมื่อกดปุ่มแล้วทางระบบจะนำข้อมูลออกโดยอัตโนมัติแบบไม่แจ้งเตือน โปรดกดปุ่มกลับไปยังหน้าจัดการแล้วรีเฟรชหน้าจัดการ (f5) เพื่อเช็คว่าข้อมูลถูกลบหรือไม่ หากยังไม่ถูกลบทางระบบอาจกำลังอยู่ในขั้นตอนกระบวนการ หากไม่ลบเลยโปรดเช็คว่าข้อมูลที่กรอกไปนั้นถูกต้องและตรงกับข้อมูลของสินค้าที่ต้องการจะลบ</div>


            <div className={style.confirm}>
                <Link href={"/dashboard/productMaintain"}>

                </Link>
            </div>
            <div className="divider"></div>
        </div>
    )
}

export default Layout