import style from "../products.module.css"
import Link from 'next/link'

const history = async ({params}) => {
    const comcal= await fetch('http://localhost:3000/api/getcomcal/'+params.employeeId,{
      next: {revalidate:1}
    })
    const calinfo = await comcal.json()

    const sercal= await fetch('http://localhost:3000/api/getserbill/'+params.employeeId,{
      next: {revalidate:1}
    })
    const serinfo = await sercal.json()
    
    
    return (
        <div className={style.menu}>
             <div>{"TIMEDATE Start : " + calinfo.servicebilling_start}</div>
             <div>{"TIMEDATE END : " + calinfo.servicebilling_end}</div>
          <div className="divider text-xl">รายการคอมมิชชั่น</div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>รหัสบิล</th>
                            <th>เบอร์โทรลูกค้า</th>
                            <th>รหัสพนักงาน</th>
                            <th>รหัสคอมมิชชั่น</th>
                            <th>วันเวลาที่บริการ</th>
                            <th>รายได้</th>
                        </tr>
                    </thead>
                    <tbody>
                        {serinfo.map((cat) => (
                            <tr key={params.employeeId}>
                                <td>{cat.servicebilling_id}</td>
                                <td>{cat.cus_phone}</td>
                                <td>{cat.em_id}</td>
                                <td>{cat.commission_id}</td>
                                <td>{cat.servicebilling_date}</td>
                                <td>{cat.ServiceBillingTotalRevenue}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div class="divider"></div>
            <div>{"รายการเดือนนี้ทั้งหมด : " + calinfo.servicebilling_start}</div>
            <div>{"สรุปยอด Commission: " + calinfo.servicebilling_end}</div>
            <button class="btn glass">สรุปและประมวลผล</button>
        </div>
    )
}

export default history