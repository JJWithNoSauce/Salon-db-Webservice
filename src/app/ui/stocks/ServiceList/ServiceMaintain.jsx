import Link from "next/link";
import style from "./serviceList.module.css"

const ServiceMaintain = async () => {

    const res= await fetch('http://localhost:3000/api/getservice',{
        next:{revalidate:1}
    })
    const services = await res.json()
    return (
        <div className={style.list}>
            <ul>
            {Array.from(services).map((cat) =>(
                <li key={cat.service_id}>
                    <Link href={"/dashboard/servicesMaintain/" + cat.service_id }>
                        <button class="btn btn-ghost text-xl" className={style.cat}>
                            {cat.service_name +' '+cat.service_avg_price +' บาท '}
                        </button>
                    </Link>
                </li>
            ))}
            </ul>
        </div>
    );
};

export default ServiceMaintain;