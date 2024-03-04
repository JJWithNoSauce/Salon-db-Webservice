import { NextResponse } from "next/server";
import { db,ssh } from "@/app/db";

export async function GET(req,{params}){
    const client = await db(); 
    const results = await new Promise((resolve, reject) => {
      client.query('SELECT * FROM ServiceBilling WHERE em_id=?',[params.employeeid],(error, results, fields) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
    ssh.close();

    return NextResponse.json(results);
}
