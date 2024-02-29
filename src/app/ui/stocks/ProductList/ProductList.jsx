import style from "./productList.module.css"
import Lists from "./Listing";

const ProductList = () => {
    return (
        <div className={style.list}>
            <ul>
            <div class="divider text-xl">รายการสินค้า</div>
            {Lists.map((cat) =>(
                <li key={cat.title}>
                    <button class="btn btn-ghost text-xl">
                        {cat.title} || {cat.price} บาท
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