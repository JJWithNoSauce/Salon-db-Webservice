import style from "./products.module.css"
import Link from 'next/link'
import { delProduct } from "@/app/app"

const Layout = ({children}) => {
    return (
        <div className="form-control">
            <div>
            <Link href={"/dashboard/servicesMaintain"}>
                <button className="btn btn-square btn-outline">
                    กลับ
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </Link>
            <div className="divider text-xl">ลบบริการ</div>

            </div>
            <form action={delProduct}>
                <input type="text" name="product_name" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                <br/>
                <br/>
                <input type="text" name="product_size" placeholder="Size" className="input input-bordered w-full max-w-xs" />
                <br/>
                <br/>
                <button className="btn glass btn-block text-xl">
                    Confirm ลบบริการ
                </button>
            </form>

            <div className="divider">โปรดกรอกชื่อสินค้าแล้วกด Confirm เพื่อลบบริการนั้นๆ</div>


            <div className={style.confirm}>
                <Link href={"/dashboard/productMaintain"}>

                </Link>
            </div>
            <div className="divider"></div>
        </div>
    )
}

export default Layout