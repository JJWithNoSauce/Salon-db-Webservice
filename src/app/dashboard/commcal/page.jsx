'use client'
import React, { useState } from 'react';
import style from "./products.module.css"
import Link from 'next/link'

const commcal = () => {
    const [emId, setEmId] = useState('');

    const handleChange = (event) => {
        setEmId(event.target.value);
    };
    
    
    return (
        <div className={style.menu}>
            <div>รหัสพนักงาน</div>
            <div>
            
            <form>
                <input type="number" name="em_id" placeholder="ใส่รหัสเพื่อดูผลคำนวณที่กำหนด" class="input input-bordered w-full max-w-xs" value={emId} onChange={handleChange}/>
            </form>
            
            <Link href = {`/dashboard/commcal/${emId}`}>
            <button class="btn glass">Submit</button>
            </Link>
            
            </div>
            <div class="divider">โปรดเลือกหมวดหมู่ประวัติที่ต้องการจะให้แสดง</div>
            
        </div>

    )
}

export default commcal