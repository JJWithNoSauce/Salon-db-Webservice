import style from "./products.module.css"
import Link from 'next/link'

const history = () => {
    return (
        <div className={style.menu}>
            <div className="divider">โปรดเลือกหมวดหมู่ประวัติที่ต้องการจะให้แสดง</div>
        </div>
    )
}

export default history