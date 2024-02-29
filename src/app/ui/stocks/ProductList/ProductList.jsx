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

const ProductList = () => {
    return (
        <div className={style.list}>
            <ul>
            <div class="divider text-xl">รายการสินค้า</div>
            {Products.map((cat) =>(
                <li key={cat.title}>
                    <button class="btn btn-ghost text-xl">
                        {cat.title}
                    </button>
                    <div>
                    <button class="btn btn-outline btn-success text-xl">
                        add
                    </button>
                    <button class="btn btn-outline btn-error text-xl">
                        remove
                    </button>
                    <div class="divider"></div>
                    </div>
                </li>
            ))}
            </ul>
        </div>
    );
};

export default ProductList;