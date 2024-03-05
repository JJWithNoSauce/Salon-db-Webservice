import Link from 'next/link'

import Image from "next/image";
import { db} from "./db";
import { addQuery } from "./app";

export default function Homepage() {
  return (
    <main className="Homepage">
      <div>
      <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src="https://assets-global.website-files.com/6103d7500a0d507d3f6f48a7/6299d11bde8c647225da5125_6-salon-interior-design-tips-for-2022-p-800.png" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Salondb_KKU by กลุ่มระบบฐานข้อมูลร้านเสริมสวย</h1>
      <p class="py-6">ระบบจัดการข้อมูลและองค์ประกอบต่างๆภายในร้านเสริมสวย</p>

      <Link href={"/dashboard"}>
                <button className="btn btn-glass btn-block text-xl">
                    เข้าสู่หน้าการใช้งาน
                </button>
      </Link>
    </div>
  </div>
</div>
      
      </div> 
    </main>
  );
}

//select * from Persons
