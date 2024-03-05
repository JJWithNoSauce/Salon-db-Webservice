import { NextResponse } from "next/server";
import { db,ssh } from "@/app/db";

export async function POST(req,res){
    const { servicebilling_id, cus_phone, em_id, commission_id, servicebilling_date, ServiceBillingTotalRevenue } = await req.json();
    const values = [servicebilling_id, cus_phone, em_id, commission_id, servicebilling_date, ServiceBillingTotalRevenue];
    //const sql = 'INSERT INTO ProductBilling(productbilling_id, cus_phone, productbiling_date, em_id , ProductBillingTotalRevenue) VALUES ('+ProductBilling_id+', '+Cus_phone+', '+ProductBillingDate+', '+Em_id+', '+Revenue+')';
    const sql = 'INSERT INTO ServiceBilling(servicebilling_id, cus_phone, em_id, commission_id, servicebilling_date, ServiceBillingTotalRevenue) VALUES (?, ?, ?, ?, ?, ?)';

    const client = await db(); 
    const results = await new Promise((resolve, reject) => {
        client.query(sql,values ,(error, results, fields) => {
            if (error) {
              reject(error)
            } else {
              resolve(results)
            }
          });
    });
    ssh.close();
    return NextResponse.json(results);
}
