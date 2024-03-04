import EmList from "/src/app/ui/dashboard/employee/employeeList.jsx"
import style from "./user.module.css"
import Link from 'next/link'

const Layout = ({children}) => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div class="divider text-xl">พนักงาน</div>
                
                <EmList/>

                <div class="divider">เลือกพนักงานเพื่อดูรายละเอียด</div>
            </div>
            <div className={style.content}>
                {children}
            </div>
        </div>
    )
}

export default Layout