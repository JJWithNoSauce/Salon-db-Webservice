import Link from "next/link";
import style from "./productList.module.css"

const Products = [
    {
        title: "Shampoo",
    },
    {
        title: "Soaps",
    },
    {
        title: "Cool Stuffs",
    },
    {
        title: "Very Nice Shampoo",
    },
    {
        title: "Opera Shampoo",
    },
    {
        title: "Morbing Shampoo",
    },
    {
        title: "Fillian's Shampoo",
    },
    {
        title: "Super Very Nice Shampoo",
    },
    {
        title: "Thai Shampoo",
    },
    {
        title: "Soaping the Soap",
    },
    {
        title: "Soapy The Soap",
    },
    {
        title: "This project's ded",
    },
]

const ProductMaintain = () => {
    return (
        <div className={style.list}>
            <ul>
            {Products.map((cat) =>(
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