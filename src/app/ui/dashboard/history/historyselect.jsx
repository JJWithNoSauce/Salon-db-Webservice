import Link from 'next/link'
import style from "./history.module.css"

const historyselect = () => {
    return (
        <div className={style.menu}>
        <details className="collapse bg-base-200">
            <summary className="collapse-title text-xl font-medium">โปรดกดเพื่อเลือกประเภทประวัติที่ต้องการจะแสดง</summary>
            <div className="collapse-content"> 
                <Link href="/dashboard/history/historyProduct">
                <button className="btn glass btn-block text-xl">ประวัติการทำรายการเกี่ยวสินค้า</button>
                </Link>

                <Link href="/dashboard/history/historyService">
                <button className="btn glass btn-block text-xl">ประวัติการทำรายการเกี่ยวบริการ</button>
                </Link>
            </div>
            </details>
        </div>
    );
};

export default historyselect;