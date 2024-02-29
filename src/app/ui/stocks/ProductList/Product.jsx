import style from "./productList.module.css"

const ProductList = async () => {
    const client = await db(); 
    const results = await new Promise((resolve, reject) => {
      client.query('SELECT * FROM Product', (error, results, fields) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
    ssh.close();

    return (
        <div className={style.list}>
            <ul>
            {results.map((cat) =>(
                <li key={cat.product_name}>
                    <div>
                        <img src="https://png.pngtree.com/png-clipart/20221211/ourmid/pngtree-shampoo-clipart-png-image_6519245.png" alt="" width="100" height="100"/>
                    </div>
                    
                    <button class="btn btn-ghost text-xl">
                        {cat.product_name}
                    </button>
                    <div>
                    <button class="btn btn-ghost text-xl">
                        add
                    </button>
                    <button class="btn btn-ghost text-xl">
                        remove
                    </button>
                    </div>
                </li>
            ))}
            </ul>
        </div>
    );
};

export default ProductList;