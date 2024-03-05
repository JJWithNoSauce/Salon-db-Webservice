import { ssh,db } from "./db";

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

export async function addEmployee(formData) {
  'use server'

  const client = await db();
  const id = await new Promise((resolve, reject) => {
    client.query('SELECT max(em_id) AS newRow FROM Employee', (error, results, fields) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });

  console.log(id[0].newRow + 1)
  const newEm_id = id[0].newRow + 1

  const employeeData = {
    em_id: newEm_id,
    em_name: formData.get("name"),
    em_address: formData.get("address"),
    em_phone: formData.get("phone"),
    em_email: formData.get("email"),
    isadmin: true
  }

  db().then(client => {
    client.query('INSERT INTO Employee SET ?', employeeData, (error, results, fields) => {
      if (error) {
        console.error('Error inserting data into Customer table: ', error)
        return;
      }
      console.log('Data inserted successfully')
    })
  })
}

export async function addCustomer(formData) {
  'use server'

  const customerData = {
    cus_phone: formData.get("phone"),
    cus_name: formData.get("name")
  }

  db().then(client => {
    client.query('INSERT INTO Customer SET ?', customerData, (error, results, fields) => {
      if (error) {
        console.error('Error inserting data into Customer table: ', error)
        return;
      }
      console.log('Data inserted successfully')
    })
  })
}

export async function editEmployee(formData) {
  'use server'

  const em_id = formData.get('id')
  const em_name = formData.get('name')
  const em_address = formData.get('address')
  const em_phone = formData.get('phone')
  const em_email = formData.get('email')
  const isadmin = true

  db().then(client => {
    client.query('UPDATE Employee SET em_name = ?, em_address = ?, em_phone = ?, em_email = ?, isadmin = ? WHERE em_id = ?',
    [em_name, em_address, em_phone, em_email, isadmin, em_id], (error, results, fields) => {

        if (error) {
          console.error('Error inserting data into Product table: ', error);
          return;
        }
        console.log('Data inserted successfully');
      });
  })
}

export async function editProduct(formData) {
  'use server'

      const product_id = formData.get("id")
      const product_name= formData.get("name")
      const product_size= formData.get("size")
      const product_type=formData.get("type")
      const product_price= formData.get("price")
      const product_amount= formData.get("amount")
      const em_id=formData.get('em_Id')
    console.log(product_name)
    db().then(client => {
      client.query('UPDATE Product SET product_name = ?, product_size = ?, product_type = ?, product_price = ?, product_amount = ? WHERE product_id = ?',
      [product_name, product_size, product_type, product_price, product_amount, product_id], (error, results, fields) => {

          if (error) {
            console.error('Error inserting data into Product table: ', error);
            return;
          }
          console.log('Data inserted successfully');
        });
    })
    
    
}

export async function addSkill(formData){
    'use server'

    const em_id = formData.get('id')
    const skill = Number(formData.get('skillid'))

    console.log(em_id)
    console.log(skill)

    db().then(client => {
      client.query('INSERT INTO EmployeeSkill(em_id, service_id) VALUES (?, ?)', [em_id, skill], (error, results, fields) => {
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
  
    const client = await db();
    const id = await new Promise((resolve, reject) => {
      client.query('SELECT max(service_id) AS newRow FROM Service', (error, results, fields) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  
    console.log(id[0].newRow + 1)
    const newSer_id = id[0].newRow + 1
  
    const serviceData = {
      service_id: newSer_id,
      service_name: formData.get("name"),
      service_avg_price: formData.get("price"),
    }
  
    db().then(client => {
      client.query('INSERT INTO Service SET ?', serviceData, (error, results, fields) => {
        if (error) {
          console.error('Error inserting data into Customer table: ', error)
          return;
        }
        console.log('Data inserted successfully')
      })
    })
  }

export async function editServices(formData) {
  'use server'

  const service_id = formData.get('id')
  const service_name = formData.get('name')
  const service_price = formData.get('price')

  db().then(client => {
    client.query('UPDATE Service SET service_name = ?, service_avg_price = ? WHERE service_id = ?',
    [service_name, service_price, service_id], (error, results, fields) => {

        if (error) {
          console.error('Error inserting data into Product table: ', error);
          return;
        }
        console.log('Data inserted successfully');
        console.log({service_id,service_name,service_price});
      });
  })
}

export async function delServices(formData) {
  'use server'

  const serviceData = [formData.get("name"),formData.get("price")];

    const sql = 'DELETE FROM Service WHERE service_name = ? AND service_avg_price = ?';


  db().then(client => {
      client.query(sql, serviceData, (error, results, fields) => {
          if (error) {
            console.error('Error inserting data into Product table: ', error);
            return;
          }
          console.log('Data removed successfully');
        });
    })
    try {
      ssh.close();
    } catch (error) {
        console.error("Error closing SSH connection:", error);
    }
  
}

export async function delProduct(formData) {
  'use server'

  const productData = [formData.get("product_name"),formData.get("product_size")];

    const sql = 'DELETE FROM Product WHERE Product_name = ? AND Product_size = ?';


  db().then(client => {
      client.query(sql, productData, (error, results, fields) => {
          if (error) {
            console.error('Error inserting data into Product table: ', error);
            return;
          }
          console.log('Data inserted successfully');
        });
    })
  ssh.close()
}

export async function delEmployee(formData) {
  'use server'

  const DelData = formData.get("name")
  console.log(DelData)

  db().then(client => {
    client.query('DELETE FROM Employee WHERE em_name = ?', DelData, (error, results, fields) => {
        if (error) {
          console.error('Error deleting data into Product table: ', error);
          return;
        }
        console.log('Data deleted successfully');
      });
  })
}

export async function updateCalCom(formData) {
  'use server'

    const em_id = formData.get("em_id")
    const servicebilling_date_start = formData.get("Start Date")
    const servicebilling_time_start = formData.get("Start Time")
    const servicebilling_date_end = formData.get("End Date")
    const servicebilling_time_end= formData.get("End Time")    

    const datetimeStart = servicebilling_date_start + " " + servicebilling_time_start
    const datetimeEnd = servicebilling_date_end + " " + servicebilling_time_end

  db().then(client => {
    
      client.query('UPDATE ServiceBillingDate SET servicebilling_start = ?, servicebilling_end = ? WHERE em_id = ?',
      [datetimeStart, datetimeEnd, em_id],
      (error, results, fields) => {
          if (error) {
            console.error('Error inserting data into Product table: ', error);
            return;
          }
          console.log('Data inserted successfully');
          console.log(em_id, datetimeStart, datetimeEnd)
        });
    })
}




