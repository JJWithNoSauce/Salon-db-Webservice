import { db, ssh } from "@/app/db";
import Link from "next/link";

export default async function BillingDetail({ params }){
    const id_query = Number(params.BillingId)
    console.log(Number(params.BillingId))

    const client = await db(); 
    const BillingDetail = await new Promise((resolve, reject) => {
        client.query('SELECT ProductOrder.product_id, product_name, productorder_amount, product_price, productorder_totalprice FROM Product, ProductOrder, ProductBilling WHERE ProductOrder.product_id = Product.product_id AND ProductOrder.productbilling_id = ProductBilling.productbilling_id AND ProductOrder.productbilling_id = '+id_query, (error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
    ssh.close()

    console.log(BillingDetail)

    return (
        <div>
            <div className="divider text-xl">Product History Detail</div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Product Amount</th>
                            <th>Product Price</th>
                            <th>Product Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {BillingDetail.map((cat) => (
                            <tr key={cat.product_id}>
                                <td>{cat.product_id}</td>
                                <td>{cat.product_name}</td>
                                <td>{cat.productorder_amount}</td>
                                <td>{cat.product_price}</td>
                                <td>{cat.productorder_totalprice}</td>
                            </tr>
                        ))}
                    </tbody>
                    <div>
                        <Link href={"/dashboard/history/historyProduct"}>
                            <button className="btn">
                                กลับ
                            </button>
                        </Link>
                    </div>
                </table>
            </div>
        </div>
    );
};
