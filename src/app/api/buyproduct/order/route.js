import { NextResponse } from "next/server";
import { db,ssh } from "@/app/db";

export async function POST(req,res){
    const { ProductBilling_id, product_id,productorder_amount,productorder_totalprice } = await req.json();
    const values = [ProductBilling_id, product_id,productorder_amount,productorder_totalprice];
    const sql = 'INSERT INTO ProductOrder(productbilling_id, product_id,productorder_amount,productorder_totalprice) VALUES (?, ?, ?, ?)';

    

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


async function updataProduct(id,amont){
    amont = amont-1
    const sql = 'UPDATE Product SET amount = ? WHERE product_id = ?';
    const values = [amont,id]

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
}