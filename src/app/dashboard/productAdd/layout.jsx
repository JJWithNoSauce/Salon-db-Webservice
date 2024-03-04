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
                <input type="text" name="name" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                <br/>
                <input type="text" name="size" placeholder="Size" className="input input-bordered w-full max-w-xs" />
                <br/>
                <input type="text" name="type" placeholder="Type" className="input input-bordered w-full max-w-xs" />
                <br/>
                <input type="number" name="amount" placeholder="Amount" className="input input-bordered w-full max-w-xs" />
                <br/>
                <input type="number" name="price" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                <br/>

                <button className="btn glass btn-block text-xl" type="submit" href={"/dashboard/productMaintain"}>
                    Confirm เพิ่มสินค้า
                </button>
            </form>

            <div className="divider">เมื่อกรอกข้อมูลเสร็จสิ้นโปรดกดปุ่ม Confirm เพื่อเพิ่มสินค้า</div>

            <div className="divider"></div>
        </div>
    )
}

export default Layout