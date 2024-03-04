import EmList from "/src/app/ui/dashboard/employee/employeeCommission.jsx"
import Config from "/src/app/ui/stocks/ProductList/ProductConfig.jsx"
import style from "./products.module.css"
import Link from 'next/link'

const Layout = ({children}) => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className="divider text-xl">พนักงาน</div>
                
                <EmList/>

                <div className="divider">เลือกพนักงานเพื่อคำนวณค่างาน</div>
            </div>
            <div classNameName={style.content}>
                {children}
            </div>
        </div>
    )
}

export default Layout