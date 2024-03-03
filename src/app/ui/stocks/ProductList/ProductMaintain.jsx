import Link from "next/link";
import style from "./productList.module.css"

const ProductMaintain = async () => {
    const res= await fetch('http://localhost:3000/api/getproduct')
    const products = await res.json()
    return (
        <div className={style.list}>
            <ul>
            {Array.from(products).map((cat) =>(
                <li key={cat.product_name}>
                    <Link href={"/dashboard/productMaintain/" + cat.product_id }>
                        <button class="btn btn-ghost text-xl" className={style.cat}>
                            {cat.product_type +' '+cat.product_name +' ขนาด '+ cat.product_size}
                        </button>
                    </Link>
                </li>
            ))}
            </ul>
        </div>
    );
};

export default ProductMaintain;