import style from "./confirm.module.css"
import Link from "next/link"

export default function confirm(){
    return(
        <> 
            <div className={style.contriner}>
                <div>
                    บริการที่เลือก :
                    <br /> <br /> 
                    ช่างที่เลือก :
                    <br /> <br />
                    รายละเอียดการจอง :<br />
                    เบอร์โทรลูกค้า :<br />
                    <br />ราคารวม :
                    <br /> <br />
                </div>
                <button className="btn">ลบรายการ</button>
                <Link href="/dashboard/services">
                    <button className="btn">เพิ่มรายการ</button>
                </Link>
                <Link href="/dashboard/services/detail/confirm/success">
                    <button className="btn">ยืนยัน !</button>
                </Link>    
            </div>
        </>
    )
}