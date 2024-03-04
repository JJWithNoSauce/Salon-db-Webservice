import Maintain from "/src/app/ui/stocks/ProductList/ProductMaintain.jsx"
import Config from "/src/app/ui/stocks/ProductList/ProductConfig.jsx"
import style from "./products.module.css"
import Link from 'next/link'

const Layout = ({children}) => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className="divider text-xl">เพิ่มหรือลบรายการบริการ</div>

                <Link href={"/dashboard/servicesAdd"}>
                        <button className="btn glass btn-block text-xl">
                            Add Services
                        </button>
                </Link>
                
                <div className="divider">OR</div>
                
                <Link href={"/dashboard/servicesRemove"}>
                        <button className="btn glass btn-block text-xl">
                            Remove Services
                        </button>
                </Link>

                <div className="divider"></div>
                <div className="divider text-xl">รายการบริการ</div>
                
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