import Link from 'next/link'
import style from "./history.module.css"

const historyselect = () => {
    return (
        <div className={style.menu}>
        <details className="collapse bg-base-200">
            <summary className="collapse-title text-xl font-medium">Click here to select which type of history to display.</summary>
            <div className="collapse-content"> 
                <Link href="/dashboard/history/historyProduct">
                <button className="btn glass btn-block text-xl">Product Bill History</button>
                </Link>

                <Link href="/dashboard/history/historyService">
                <button className="btn glass btn-block text-xl">Service Bill History</button>
                </Link>

                <Link href="/dashboard/history/historyCommission">
                <button className="btn glass btn-block text-xl">Commission Bill History</button>
                </Link>
            </div>
            </details>
        </div>
    );
};

export default historyselect;