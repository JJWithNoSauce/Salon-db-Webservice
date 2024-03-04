'use client'

import style from './detail.module.css'
import Link from 'next/link'

export default function detail(){
    
    return(
        <> 
            <div className={style.container}>
                <input type="text" placeholder="กรอกเบอร์โทรลูกค้า" className="input input-bordered w-full max-w-xs"/>
                <input type="text" placeholder="กรอกราคา" className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className={style.button}>
                <Link href="/dashboard/services/detail/confirm">
                    <button className="btn">ตกลง</button>
                </Link>
                <Link href="/dashboard/register">
                    <button className="btn">สมัคร</button>
                </Link>
            </div>
        </>
    )
}
