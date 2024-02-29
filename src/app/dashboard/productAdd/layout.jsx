import style from "./products.module.css"
import Link from 'next/link'

const Layout = ({children}) => {
    return (
        <div className={style.container}>
            
            <Link href={"/dashboard/productMaintain"}>
                <button class="btn btn-square btn-outline">
                    กลับ
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </Link>
            <div className={style.content}>
                ชื่อ
                <input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" />
            </div>
            <div className={style.content}>
                ประเภท
                <input type="text" placeholder="Type" class="input input-bordered w-full max-w-xs" />
            </div>
            <div className={style.content}>
                ขนาด
                <input type="text" placeholder="Size" class="input input-bordered w-full max-w-xs" />
            </div>
            <div className={style.content}>
                ราคา
                <input type="text" placeholder="Price" class="input input-bordered w-full max-w-xs" />
            </div>
            <div className={style.content}>
                จำนวนสินค้า
                <input type="text" placeholder="Stock" class="input input-bordered w-full max-w-xs" />
            </div>

            <div className={style.confirm}>
                เพิ่มสินค้า
                <Link href={"/dashboard/productAdd"}>
                        <button class="btn glass btn-block text-xl">
                            Confirm
                        </button>
                </Link>
            </div>
        </div>
    )
}

export default Layout