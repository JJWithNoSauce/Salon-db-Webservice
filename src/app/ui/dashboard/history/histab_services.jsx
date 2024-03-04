import { db, ssh } from "@/app/db";

const client = await db(); 
const ServiceBilling = await new Promise((resolve, reject) => {
  client.query('SELECT ServiceBilling.servicebilling_id, ServiceBilling.cus_phone, commission_id, em_name, servicebilling_date, count(ServiceOrder.servicebilling_id) AS totalService, sum(service_order_revenue) AS totalPrice FROM ServiceBilling, Employee, Customer, ServiceOrder WHERE ServiceBilling.servicebilling_id = ServiceOrder.servicebilling_id AND ServiceBilling.cus_phone = Customer.cus_phone AND ServiceBilling.em_id = Employee.em_id GROUP BY ServiceBilling.servicebilling_id, ServiceBilling.cus_phone, cus_name, commission_id, ServiceBilling.em_id, em_name, servicebilling_date;', (error, results, fields) => {
    if (error) {
      reject(error);
      return;
    }
    resolve(results);
  });
});
ssh.close(ServiceBilling)

console.log()

const HistabServices = () => {
    return (
        <div>
            <div className="divider text-xl">Services History</div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Service Billing Id</th>
                            <th>Customer Phone</th>
                            <th>Commission Id</th>
                            <th>Service Billing Date</th>
                            <th>Employee Name</th>
                            <th>Total Service</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ServiceBilling.map((cat) => (
                            <tr key={cat.servicebilling_id}>
                                <td>{cat.servicebilling_id}</td>
                                <td>{cat.cus_phone}</td>
                                <td>{cat.commission_id}</td>
                                <td>{String(cat.servicebilling_date)}</td>
                                <td>{cat.em_name}</td>
                                <td>{cat.totalService}</td>
                                <td>{cat.totalPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HistabServices;