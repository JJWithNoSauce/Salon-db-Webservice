import Link from "next/link";
import style from "./productList.module.css"
import { db,ssh } from "@/app/db";

const ProductMaintain = async () => {
    const client = await db(); 
    const results = await new Promise((resolve, reject) => {
      client.query('SELECT * FROM Product', (error, results, fields) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
    ssh.close();

    return (
        <div className={style.list}>
            <ul>
            {Array.from(results).map((cat) =>(
                <li key={cat.product_name}>
                    <Link href={"/dashboard/productMaintain/" + cat.product_name}>
                        <button class="btn btn-ghost text-xl" className={style.cat}>
                            {cat.product_name}
                        </button>
                    </Link>
                </li>
            ))}
            </ul>
        </div>
    );
};

export default ProductMaintain;