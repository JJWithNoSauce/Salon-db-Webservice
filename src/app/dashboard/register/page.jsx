import { register } from "./action"
import Link from "next/link"

export default function detail(){
    
    return(
        <> 
            <div>
            <form action={register()}>
                <input name="phone" type="text" placeholder="กรอกเบอร์โทร" className="input input-bordered w-full max-w-xs"/>
                <input name="name" type="text" placeholder="กรอกชื่อ-นามสกุล" className="input input-bordered w-full max-w-xs"/>
            </form>
            </div>
            <div>
                <Link href="/dashboard/register/confirm">
                    <button className="btn">ตกลง</button>
                </Link>
            </div>
        </>
    )
}
