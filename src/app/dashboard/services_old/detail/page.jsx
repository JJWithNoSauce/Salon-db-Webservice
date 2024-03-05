import style from './detail.module.css'
import Link from 'next/link'
import { addCustomer } from "@/app/app"

export default function detail(){
    
    return(
        <> 
            <div>
            <form action={addCustomer}>
                <input name="name" type="text" placeholder="กรอกชื่อ-นามสกุล" className="input input-bordered w-full max-w-xs"/>
                <br />
                <input type="text" placeholder="กรอกราคา" className="input input-bordered w-full max-w-xs"/>
                <br />
                <button className="btn" type="submit" href={"/dashboard/register/success"}>
                    ลงทะเบียน
                </button>
            </form>
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
