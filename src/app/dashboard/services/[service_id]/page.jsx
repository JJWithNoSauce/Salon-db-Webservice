// 'use client'
import styles from "./employee.module.css"
import Link from "next/link"
import { db, ssh } from "@/app/db";
// import { useRouter } from "next/navigation";

export default async function employee({ params }){
    
    const id_query = Number(params.service_id)
    console.log(Number(params.service_id))

    // const router = useRouter()
    // const data = router.query

    // console.log(data)

    const client = await db(); 
    const resultEmployee = await new Promise((resolve, reject) => {
      client.query('SELECT * FROM Employee, EmployeeSkill, Service WHERE Employee.em_id = EmployeeSkill.em_id AND Service.service_id = EmployeeSkill.service_id AND EmployeeSkill.service_id = '+ id_query, (error, results, fields) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });

    const resultService = await new Promise((resolve, reject) => {
        client.query('SELECT * FROM Service WHERE Service.service_id = '+ id_query, (error, results, fields) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(results);
        });
      });
      ssh.close();

      console.log(resultService)
      console.log(resultEmployee)

    return(
        <> 
            <div className={styles.container}>
                {resultEmployee.map(item=>(
                    <div key={item.em_id}>
                        <Link href={'/dashboard/services/detail'}>
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