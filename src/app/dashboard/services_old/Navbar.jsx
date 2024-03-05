import stlyes from "./nav.module.css"
import Link from "next/link"

export default function Navbar(){
    return(
        <nav className={stlyes.nav}>
            <ul>
                <Link href="/dashboard/services">บริการ</Link>
                &gt;
                <Link href="/dashboard/services">เลือกช่าง</Link>
                &gt;
                <Link href="/dashboard/services/detail">รายละเอียด</Link>
                &gt;
                <Link href="/dashboard/services/detail/confirm">ยืนยัน</Link>
            </ul>
        </nav>
    )
}