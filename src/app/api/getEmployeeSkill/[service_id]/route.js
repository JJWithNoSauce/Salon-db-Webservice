import { NextResponse } from "next/server";
import { db,ssh } from "@/app/db";

export async function POST(req,res){
    const service_id = await req.json()
    const client = await db(); 
    const results = await new Promise((resolve, reject) => {
        client.query('SELECT Employee.em_id, em_name FROM Employee, EmployeeSkill, Service WHERE Employee.em_id = EmployeeSkill.em_id AND Service.service_id = EmployeeSkill.service_id AND Service.service_id = '+service_id ,(error, results, fields) => {
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