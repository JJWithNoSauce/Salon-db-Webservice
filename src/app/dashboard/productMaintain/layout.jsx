import Maintain from "/src/app/ui/stocks/ProductList/ProductMaintain.jsx"
import Config from "/src/app/ui/stocks/ProductList/ProductConfig.jsx"
import style from "./products.module.css"
import Link from 'next/link'

const Layout = ({children}) => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className="divider text-xl">เพิ่มหรือลบรายการสินค้า</div>

                <Link href={"/dashboard/productAdd"}>
                        <button className="btn glass btn-block text-xl">
                            Add Product
                        </button>
                </Link>
                
                <div className="divider">OR</div>
                
                <Link href={"/dashboard/productRemove"}>
                        <button className="btn glass btn-block text-xl">
                            Remove Product
                        </button>
                </Link>

                <div className="divider text-xl">รายการสินค้า</div>
                
                <Maintain/>

                <div className="divider">เลือกรายการเพื่อดูรายละเอียดหรือปรับแต่ง</div>
            </div>
            <div className={style.content}>
                {children}
            </div>
        </div>
    )
}

export default Layout