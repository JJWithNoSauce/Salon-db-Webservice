import style from "./products.module.css"
import Link from 'next/link'

const Layout = ({children}) => {
    return (
        <div class="form-control">
            <div>
            <Link href={"/dashboard/productMaintain"}>
                <button class="btn btn-square btn-outline">
                    กลับ
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </Link>
            <div class="divider text-xl">เพิ่มสินค้า</div>

            </div>
            <form className={style.content}>
                <input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Size" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Amount" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Price" class="input input-bordered w-full max-w-xs" />
            </form>

            <div class="divider">เมื่อกรอกข้อมูลเสร็จสิ้นโปรดกดปุ่ม Confirm เพื่อเพิ่มสินค้า</div>


            <div className={style.confirm}>
                <Link href={"/dashboard/productMaintain"}>
                        <button class="btn glass btn-block text-xl">
                            Confirm เพิ่มสินค้า
                        </button>
                </Link>
            </div>
            <div class="divider"></div>
        </div>
    )
}

export default Layout