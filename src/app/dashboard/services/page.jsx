import styles from "./service.module.css"
import Link from "next/link"

export default function services(){

    const servicelist = [
        {
            id: 1,
            title: "บริการที่ 1",
            price: 549,
            stock: 94
        },
        {
            id: 2,
            title: "บริการที่ 2",
            price: 600,
            stock: 34
        },
        {
            id: 3,
            title: "บริการที่ 3",
            price: 59,
            stock: 1004
        },
        {
            id: 4,
            title: "บริการที่ 4",
            price: 24,
            stock: 456
        },
        {
            id: 5,
            title: "บริการที่ 5",
            price: 32,
            stock: 564
        }
    ]

    return(
        <> 
            <div className={styles.container}>
                {servicelist.map(item=>(
                    <div key={item.id}>
                        <Link href={'/dashboard/services/employee'}>
                            <h2 className={styles.service}>{item.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}