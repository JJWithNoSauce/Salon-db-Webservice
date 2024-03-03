import style from "./products.module.css"
import History from "/src/app/ui/dashboard/history/historyselect.jsx"

const historylayout = ({children}) => {
    return (
        <div className={style.menu}>
            <div>
                <History/>
                {children}
            </div>
        </div>
    )
}

export default historylayout