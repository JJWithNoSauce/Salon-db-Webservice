import styles from "./employee.module.css"
import Link from "next/link"

export default function employee(){

    const employeelist = [
        {
            id: 1,
            title: "ช่างคนที่ 1",
            price: 549
        },
        {
            id: 2,
            title: "ช่างคนที่ 2",
            price: 600
        },
        {
            id: 3,
            title: "ช่างคนที่ 3",
            price: 59
        }

    ]

    return(
        <> 
            <div className={styles.container}>
                {employeelist.map(item=>(
                    <div key={item.id}>
                        <Link href={'/dashboard/services/employee/detail'}>
                            <h2 className={styles.service}>{item.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}