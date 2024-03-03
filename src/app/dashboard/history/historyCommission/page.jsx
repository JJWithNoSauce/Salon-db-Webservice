import style from "../products.module.css"
import History from "/src/app/ui/dashboard/history/historyselect.jsx"
import Comtab from "/src/app/ui/dashboard/history/histab_commission.jsx"

const history1 = () => {
    return (
        <div className={style.content}>
            <Comtab/>
        </div>
    )
}

export default history1