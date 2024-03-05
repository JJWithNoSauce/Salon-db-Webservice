import styles from "./service.module.css"
import Link from "next/link"
import { db, ssh } from "@/app/db";

export default async function services(){
    const client = await db(); 
    const results = await new Promise((resolve, reject) => {
      client.query('SELECT * FROM Service', (error, results, fields) => {
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
                    <div key={item.service_id}>
                        <Link 
                         href={{ 
                            pathname:'/dashboard/services/'+item.service_id, 
                            query: item.service_id}}
                            >
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

