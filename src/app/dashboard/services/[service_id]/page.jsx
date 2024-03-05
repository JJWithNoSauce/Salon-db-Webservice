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


    function setdata(data){
      let arr
    }

    return(
        <> 
            <div className={styles.container}>
                {resultEmployee.map(item=>(
                    <div key={item.em_id}>
                        <Link href={{ pathname:'/dashboard/services/detail',query:
                          {
                            em_id: item.em_id,
                            ser_id : params.service_id
                          }
                      }}>
                            <h2 className={styles.service}>ช่าง {item.em_name}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}