import { addCustomer } from "@/app/app"
import Link from "next/link"

export default function detail(){
    
    return(
        <> 
            <div>
            <form action={addCustomer}>
                <input name="phone" type="text" placeholder="กรอกเบอร์โทร" className="input input-bordered w-full max-w-xs"/>
                <br />
                <input name="name" type="text" placeholder="กรอกชื่อ-นามสกุล" className="input input-bordered w-full max-w-xs"/>
                <br />
                <button className="btn" type="submit" href={"/dashboard/register/success"}>
                    ตกลง
                </button>
            </form>
            </div>
        </>
    )
}
