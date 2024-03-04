import { db, ssh } from "@/app/db";
import Link from "next/link";

const client = await db(); 
const ProductBilling = await new Promise((resolve, reject) => {
  client.query('SELECT ProductBilling.productbilling_id, ProductBilling.cus_phone, productbiling_date, em_name, sum(productorder_amount) AS totalOrder, sum(productorder_totalprice) AS totalPrice FROM ProductBilling, Employee, Customer, ProductOrder WHERE ProductBilling.productbilling_id = ProductOrder.productbilling_id AND ProductBilling.cus_phone = Customer.cus_phone AND ProductBilling.em_id = Employee.em_id GROUP BY ProductBilling.productbilling_id, ProductBilling.cus_phone, cus_name, productbiling_date, Employee.em_id, em_name;', (error, results, fields) => {
    if (error) {
      reject(error);
      return;
    }
    resolve(results);
  });
});
ssh.close()

console.log(ProductBilling)

const HistabProducts = () => {
    return (
        <div>
            <div className="divider text-xl">Products History</div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product Billing Id</th>
                            <th>Customer Phone</th>
                            <th>Product Billing Date</th>
                            <th>Employee Name</th>
                            <th>Total Product</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ProductBilling.map((cat) => (
                            <tr key={cat.productbilling_id}>
                                <td>{cat.productbilling_id}</td>
                                <td>{cat.cus_phone}</td>
                                <td>{String(cat.productbiling_date)}</td>
                                <td>{cat.em_name}</td>
                                <td>{cat.totalOrder}</td>
                                <td>{cat.totalPrice}</td>
                                <Link href={"/dashboard/history/historyProduct/"+cat.productbilling_id}>
                                    <button className="btn">ดูรายละเอียด</button>
                                </Link>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HistabProducts;