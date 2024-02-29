import Image from "next/image";
import { db} from "./db";

export default function Homepage() {

  db.then(client => {

  
  db().then(client => {
    client.query('select * from Persons', function (err, results, fields) {
        console.log(results);
    });
  })



  return (
    <main className="Homepage">
      <div>
        <h>hh</h>
      </div> 
    </main>
  );
}

//select * from Persons
)}