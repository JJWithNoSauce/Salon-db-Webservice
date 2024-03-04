import Maintain from "/src/app/ui/dashboard/employee/employeeListDetail.jsx"
import Config from "/src/app/ui/dashboard/employee/employeeList.jsx"
import style from "./user.module.css"
import Link from 'next/link'

const emLayout = ({children}) => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div class="divider text-xl">เพิ่มหรือลบรายการพนักงาน</div>

                <Link href={"/dashboard/useradd"}>
                        <button class="btn glass btn-block text-xl">
                            Add Employee
                        </button>
                </Link>
                
                <div class="divider">OR</div>
                
                <Link href={"/dashboard/userdelete"}>
                        <button class="btn glass btn-block text-xl">
                            Remove Employee
                        </button>
                </Link>

                <div class="divider"></div>
                <div class="divider text-xl">รายการพนักงาน</div>
                
                <Maintain/>

                <div class="divider">เลือกรายการเพื่อดูรายละเอียดหรือปรับแต่ง</div>
            </div>
            <div className={style.content}>
                {children}
            </div>
        </div>
    )
}

export default emLayout