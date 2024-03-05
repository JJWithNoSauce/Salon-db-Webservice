"use client"
import styles from "./service.module.css"
import Link from "next/link"
import { useEffect } from "react";

export default async function services(){
    const res = await fetch('http://localhost:3000/api/getservice');
    const results = await res.json();

    function setdata(data){
        const d = {
            service : data,
            em : null,
            cus : null,
            price : null
        }
        
        let arr
        if(typeof window !== 'undefined'){
            let ch = localStorage.getItem("ch")
            if (ch==null) localStorage.clear()
            arr = localStorage.getItem("ser")
            if (arr!=null) arr.push(d);
            else arr = [d];
            localStorage.setItem("ser",arr)
        }
         


    }
    
    return(
        <> 
            <div className={styles.container}>
                {results.map(item=>(
                    <div key={item.service_id} >
                        <Link href={'/dashboard/services/'+item.service_id} onClick={setdata(item.service_id)}>
                            <h2 className={styles.service}>{item.service_name}</h2>
                            <br />
                            <h2 className={styles.service}>ราคา {item.service_avg_price} บาท</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

