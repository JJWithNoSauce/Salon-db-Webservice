import style from "./confirm.module.css"
import Link from "next/link"

export default function confirm(){
    const sumPrice = 0
    const tmp = [{
        name:"ตัดเล็บ",
        employee:"เคลิ้ม",
        phone:"0984536243",
        price:"300"
    },
    {
        name:"ย้อมผม",
        employee:"แคล้ว",
        phone:"08645372534",
        price:"450"
    }
]

    return(
        <> 
            <div className={style.contriner}>
                {tmp.map(item=>(
                    <div>
                        บริการที่เลือก : {item.name}
                        <br />
                        ช่างที่เลือก : {item.employee}
                        <br />
                        รายละเอียดการจอง 
                        <br />
                        เบอร์โทรลูกค้า : {item.phone}
                        <br />
                        ราคา : {item.price}
                        <br />
                        ======================
                        <br />
                    </div>
                ))}
                <div>
                    ราคารวม :
                    <br /><br />
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
