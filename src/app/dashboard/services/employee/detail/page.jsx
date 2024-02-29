import style from './detail.module.css'
import Link from 'next/link'

export default function detail(){
    return(
        <> 
            <div className={style.container}>
                <input type="text" placeholder="กรองเบอร์โทรลูกค้า" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="กรอกราคารวม" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className={style.button}>
                <Link href="/dashboard/services/employee/detail/confirm">
                    <button className="btn">ตกลง</button>
                </Link>
                <button className="btn">สมัคร</button>
            </div>
        </>
    )
}
