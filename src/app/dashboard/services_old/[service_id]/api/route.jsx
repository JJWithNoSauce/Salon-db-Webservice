import { NextResponse } from "next/server";
import { db, ssh } from "@/app/db";

export async function GET(requests, { params }){
    const id = Number(params.service_id)
    const client = await db()
    const result = await new Promise((resolve, reject) => {
        client.query('SELECT * FROM Service WHERE service_id = '+id, (error, results, fields) => {
            if(error){
                reject(error)
                return 
            }
            resolve(results)
        })
    })
    return NextResponse.json(result)
}