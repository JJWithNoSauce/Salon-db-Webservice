import { NextResponse } from "next/server";
import { db,ssh } from "@/app/db";

export async function POST(req,res){
    const { servicebilling_id, service_id, service_order_revenue } = await req.json();
    const values = [servicebilling_id, service_id, service_order_revenue];
    const sql = 'INSERT INTO ServiceOrder(servicebilling_id, service_id, service_order_revenue) VALUES (?, ?, ?)';

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
    return NextResponse.json(results);
}
