import { NextResponse } from "next/server";
import { db,ssh } from "@/app/db";

export async function POST(req,res){
    const { id,table} = await req.json();
    const sql = 'select count('+id+') from '+table;

    const client = await db(); 
    const results = await new Promise((resolve, reject) => {
        client.query(sql, (error, results, fields) => {
            if (error) {
                reject(error);
                return;
            } else {
                resolve(Object.values(results[0]));
            }
          });
    });
    ssh.close();
    
    return NextResponse.json(results);
}
