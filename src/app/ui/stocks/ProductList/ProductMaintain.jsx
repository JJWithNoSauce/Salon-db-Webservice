import Link from "next/link";
import style from "./productList.module.css"
import Lists from "./Listing";

const ProductMaintain = () => {
    return (
        <div className={style.list}>
            <ul>
            {Lists.map((cat) =>(
                <li key={cat.title}>
                    <Link href={"/dashboard/productMaintain/" + cat.title}>
                        <button class="btn btn-ghost text-xl" className={style.cat}>
                            {cat.title}
                        </button>
                    </Link>
                </li>
            ))}
            </ul>
        </div>
    );
};

export default ProductMaintain;