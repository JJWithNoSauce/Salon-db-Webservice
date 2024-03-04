import Link from "next/link";
import style from "./productList.module.css"

const employeeList = async () => {

    const res= await fetch('http://localhost:3000/api/getemployee',{
        next:{revalidate:1}
    })
    const employee = await res.json()
    return (
        <div className={style.list}>
            <ul>
            {Array.from(employee).map((cat) =>(
                <li key={cat.em_id}>
                    <Link href={"/dashboard/usersMaintain/" + cat.em_id }>
                        <button class="btn btn-ghost text-xl" className={style.cat}>
                            {cat.em_name}
                        </button>
                    </Link>
                </li>
            ))}
            </ul>
        </div>
    );
};

export default employeeList