import { NextResponse } from "next/server";
import { db,ssh } from "@/app/db";

export async function POST(req,res){
    const { ProductBilling_id, Cus_phone, ProductBillingDate, Em_id,Revenue } = await req.json();
    const values = [ProductBilling_id, Cus_phone, ProductBillingDate, Em_id,Revenue];
    //const sql = 'INSERT INTO ProductBilling(productbilling_id, cus_phone, productbiling_date, em_id , ProductBillingTotalRevenue) VALUES ('+ProductBilling_id+', '+Cus_phone+', '+ProductBillingDate+', '+Em_id+', '+Revenue+')';
    const sql = 'INSERT INTO ProductBilling(productbilling_id, cus_phone, productbiling_date, em_id , ProductBillingTotalRevenue) VALUES (?, ?, ?, ?, ?)';

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
