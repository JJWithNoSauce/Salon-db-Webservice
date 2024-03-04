import { db } from "./db";

export async function UserData(formData) {
    'use server'
    const UserData = {
        first_name: formData.get("fname"),
        last_name: formData.get("address"),
        Email: formData.get("email"),
        Phone: formData.get("phone"),
        Service: formData.get("service"),
        Salary: formData.get("salary")
      };


    db().then(client => {
        client.query('INSERT INTO User SET ?', UserData, (error, results, fields) => {
            if (error) {
              console.error('Error inserting data into Product table: ', error);
              return;
            }
            console.log('Data inserted successfully');
          });
      })
}