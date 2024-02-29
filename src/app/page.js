import Image from "next/image";
import { db} from "./db";
import { addQuery } from "./app";

export default function Homepage() {
  addQuery()

  return (
    <main className="Homepage">
      <div>
        <h>hh</h>
      </div> 
    </main>
  );
}

//select * from Persons