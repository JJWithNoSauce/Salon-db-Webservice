import { db } from "./db";

export async function addProduct(formData) {
    'use server'

    const productData = {
        product_name: formData.get("name"),
        product_size: formData.get("size"),
        product_type: formData.get("type"),
        product_price: formData.get("price"),
        product_amount: formData.get("amount")
      };


    db().then(client => {
        client.query('INSERT INTO Product SET ?', productData, (error, results, fields) => {
            if (error) {
              console.error('Error inserting data into Product table: ', error);
              return;
            }
            console.log('Data inserted successfully');
          });
      })
}


export async function addService(formData) {
    'use server'
    const service = {
        service_name: formData.get("name"),
        service_avg_price: formData.get("avg_price"),
      };


    db().then(client => {
        client.query('INSERT INTO Service SET ?', productData, (error, results, fields) => {

            if (error) {
              console.error('Error inserting data into Product table: ', error);
              return;
            }
            console.log('Data inserted successfully');
          });
      })
}

export async function getProductList() {
  'use server'


  db().then(client => {
      client.query('Select * from Product', (error, results, fields) => {

          if (error) {
            console.error('Error inserting data into Product table: ', error);
            return;
          }
          
          return results;

        });
    })
}


