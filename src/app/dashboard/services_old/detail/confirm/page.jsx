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

const billing = async (formData,order,sum)=>{
    let count = await fetch('http://localhost:3000/api/getCount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id:'servicebilling_id',
          table:'ServiceBilling'
        })
      })

    count = await count.json()
    count = parseInt(count)+1
    let date = getCurrentDateTime()
    
    await fetch('http://localhost:3000/api/buyservice/bill', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          servicebilling_id: count, 
          cus_phone: formData.get("cus_phone"), 
          servicebilling_date: date, 
          em_id: formData.get('em_id') ,
          ServiceBillingTotalRevenue: sum
        })
      });

    order.map(async(cat) =>{
        await fetch('http://localhost:3000/api/buyservice/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            servicebilling_id: count, 
            service_id: cat.service_id, 
            service_order_revenue: cat.service_price 
        })
        });

    })
    
}
