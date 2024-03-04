import style from "./user.module.css"
import Link from 'next/link'
import { UserData } from "@/app/app"

 export async function Layout(){
    'use server'

    return (
        <div className="form-control">
            <div>
            <Link href={"/dashboard/productMaintain"}>
                <button className="btn btn-square btn-outline">
                    กลับ
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </Link>
            <div className="divider text-xl">เพิ่มพนักงาน</div>

            </div>
            <form action={UserData}>
                <input type="text" name="fname" placeholder="First Name" className="input input-bordered w-full max-w-xs" />
                <br/>
                <input type="text" name="lname" placeholder="Last Name" className="input input-bordered w-full max-w-xs" />
                <br/>
                <input type="email" name="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                <br/>
                <input type="Phone" name="Phone" placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                <br/>
                <input type="text" name="service" placeholder="Service" className="input input-bordered w-full max-w-xs" />
                <br/>
                <input type="number" name="salary" placeholder="Salary" className="input input-bordered w-full max-w-xs" />
                <br/>

                <button className="btn glass btn-block text-xl" type="submit" href={"/dashboard/productMaintain"}>
                    Confirm เพิ่มพนักงาน
                </button>
            </form>

            <div className="divider">เมื่อกรอกข้อมูลเสร็จสิ้นโปรดกดปุ่ม Confirm เพื่อเพิ่มพนักงาน</div>

            <div className="divider"></div>
        </div>
    )
}

export default Layout