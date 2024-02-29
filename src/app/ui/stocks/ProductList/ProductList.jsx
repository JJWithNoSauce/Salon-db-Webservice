import style from "./productList.module.css"
import Lists from "./Listing";
import { db,ssh } from "@/app/db";

const ProductList = async () => {
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
            <div class="divider text-xl">รายการสินค้า</div>
            {results.map((cat) =>(
                <li key={cat.product_name}>
                    <button class="btn btn-ghost text-xl">
                        {cat.product_name} || {cat.product_price} บาท
                    </button>
                    <div>
                    <button class="btn btn-outline btn-success text-xl">
                        add
                    </button>
                    <button class="btn btn-outline btn-error text-xl">
                        remove
                    </button>
                    <div class="divider"></div>
                    </div>
                </li>
            ))}
            </ul>
        </div>
    );
};

export default ProductList;