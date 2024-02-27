import Image from "next/image";

export default function Homepage() {
  return (
    <main className="Homepage">
      <body>
      <html></html>
      <div class="text-left lg:text-left">
        <h1 class="py-4 px-3 text-4xl font-bold w-1/3">จัดการร้านเสริมสวย!</h1>
        <p class="py-1 px-3 text-3xl w-1/3">โปรดเลือกเมนูข้างล่าง</p>
      </div>

      <div class="py-2 px-3 font-bold">
        <ul class="menu menu-lg bg-base-200 w-1/5 h-svh rounded-box">
          <li><a>ออเดอร์ใหม่</a></li>
          <li><a>เพิ่มสต็อค</a></li>
          <li><a>ฝากเงิน</a></li>
          <li><a>บัญชี</a></li>
          <li><a>ประวัติ</a></li>
          <li><a>รายได้</a></li>
          <li><a>บัญชีพนักงาน</a></li>
        </ul>
      </div> 
      </body>
    </main>
  );
}
