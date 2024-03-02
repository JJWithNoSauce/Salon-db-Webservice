import styles from "./employee.module.css"
import Link from "next/link"
import { db, ssh } from "@/app/db";

export default async function employee({ params }){
    const id_query = Number(params.service_id)
    console.log(Number(params.service_id))
    const client = await db(); 
    const results = await new Promise((resolve, reject) => {
      client.query('SELECT * FROM Employee, EmployeeSkill, Service WHERE Employee.em_id = EmployeeSkill.em_id AND Service.service_id = EmployeeSkill.service_id AND EmployeeSkill.service_id = '+id_query, (error, results, fields) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
    ssh.close();

    return(
        <> 
            <div className={styles.container}>
                {results.map(item=>(
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