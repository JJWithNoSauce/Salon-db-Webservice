'use client'
import styles from "./employee.module.css"
import Link from "next/link"


export default async function employee({ params }){

    const res = await fetch('http://localhost:3000/api/getEmployeeSkill', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        service_id:params.service_id
      })
      });
      
    const resultEmployee = await res.json();
    console.log(resultEmployee)

    function setdata(data){
      let arr
      if(typeof window !== 'undefined'){
          arr = localStorage.getItem("ser")
          arr[arr.length-1].em = data
          localStorage.setItem("ser",arr)
      }
    }

    return(
        <> 
            <div className={styles.container}>
                {resultEmployee.map(item=>(
                    <div key={item.em_id}>
                        <Link href={'/dashboard/services/detail'} onClick={setdata(item.em_id)}>
                            <h2 className={styles.service}>ช่าง {item.em_name}</h2>
                            <br />
                            <h4 className={styles.service}>ติดต่อ : {item.em_phone}</h4>
                            <br />
                            <h4 className={styles.service}>{item.em_email}</h4>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}