import Maintain from "/src/app/ui/stocks/ProductList/ProductMaintain.jsx"
import Config from "/src/app/ui/stocks/ProductList/ProductConfig.jsx"
import style from "./products.module.css"
import Link from 'next/link'

const Layout = ({children}) => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                Part1
                {children}

                <div class="divider text-xl">เพิ่มหรือลบรายการสินค้า</div>

                <Link href={"/dashboard/productAdd"}>
                        <button class="btn glass btn-block text-xl">
                            Add Product
                        </button>
                </Link>
                
                <div class="divider">OR</div>
                
                <Link href={"/dashboard/productRemove"}>
                        <button class="btn glass btn-block text-xl">
                            Remove Product
                        </button>
                </Link>

                <div class="divider"></div>
                <div class="divider text-xl">รายการสินค้า</div>
                
                <Maintain/>

                <div class="divider">เลือกรายการเพื่อดูรายละเอียดหรือปรับแต่ง</div>
            </div>
            <div className={style.content}>
                Part2
                {children}
                Pick product to config.
            </div>
        </div>
    )
}

export default Layout