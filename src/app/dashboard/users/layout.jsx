import EmList from "/src/app/ui/dashboard/employee/employeeList.jsx"
import style from "./user.module.css"
import List from "/src/app/ui/dashboard/employee/employeeList.jsx"

const Layout = ({children}) => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <List/>
            </div>


        </div>
    )
}

export default Layout