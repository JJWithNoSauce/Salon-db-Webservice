import { db } from "@/app/db";

export async function register(formData){
    const cusPhone = formData.get("phone")
    const cusName = formData.get("name")
    
    const rows = await db.execute(`
    INSERT INTO Customer(cus_phone, cus_name) VALUES(?,?);
    `,[cusPhone, cusName])
    console.log(cusPhone, cusName);
}