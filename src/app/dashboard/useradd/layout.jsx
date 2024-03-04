import style from "./user.module.css"
import Link from 'next/link'
import { UserData } from "@/app/app"

 export async function Layout(){
    'use server'

    return (
        <div class="form-control">
            <div>
            <Link href={"/dashboard/usersMaintain"}>
                <button class="btn btn-square btn-outline">
                    กลับ
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </Link>
            <div class="divider text-xl">เพิ่มพนักงาน</div>

            </div>
            <form action={UserData}>
                <input type="text" name="name" placeholder="Name" class="input input-bordered w-full max-w-xs" />
                <br/>
                <input type="text" name="address" placeholder="Address" class="input input-bordered w-full max-w-xs" />
                <br/>
                <input type="email" name="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
                <br/>
                <input type="Phone" name="Phone" placeholder="Phone" class="input input-bordered w-full max-w-xs" />
                <br/>
                <input type="text" name="service" placeholder="Service" class="input input-bordered w-full max-w-xs" />
                <br/>
                <input type="number" name="salary" placeholder="Salary" class="input input-bordered w-full max-w-xs" />
                <br/>

                <button class="btn glass btn-block text-xl" type="submit" href={"/dashboard/usersMaintain"}>
                    Confirm เพิ่มพนักงาน
                </button>
            </form>

            <div class="divider">เมื่อกรอกข้อมูลเสร็จสิ้นโปรดกดปุ่ม Confirm เพื่อเพิ่มพนักงาน</div>

            <div class="divider"></div>
        </div>
    )
}

export default Layout