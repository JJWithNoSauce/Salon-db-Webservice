import { db, ssh } from "@/app/db";
import Link from "next/link";

export default async function BillingDetail({ params }){
    const id_query = Number(params.BillingId)
    console.log(Number(params.BillingId))

    const client = await db(); 
    const BillingDetail = await new Promise((resolve, reject) => {
        client.query('SELECT ServiceOrder.service_id, service_name, service_order_revenue FROM Service, ServiceOrder, ServiceBilling WHERE ServiceOrder.service_id = Service.service_id  AND ServiceOrder.servicebilling_id = ServiceBilling.servicebilling_id AND ServiceOrder.servicebilling_id = '+id_query, (error, results, fields) => {
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
            <div className="divider text-xl">Service History Detail</div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Service Id</th>
                            <th>Service Name</th>
                            <th>Service Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {BillingDetail.map((cat) => (
                            <tr key={cat.service_id}>
                                <td>{cat.service_id}</td>
                                <td>{cat.service_name}</td>
                                <td>{cat.service_order_revenue}</td>
                            </tr>
                        ))}
                    </tbody>
                    <div>
                        <Link href={"/dashboard/history/historyService"}>
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
