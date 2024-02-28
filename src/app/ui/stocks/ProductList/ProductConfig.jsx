import style from "./productList.module.css"

const ProductSum = () => {
    return (
        <div className={style.list}>
            <input type="text" placeholder="New name" class="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Price" class="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Stock" class="input input-bordered w-full max-w-xs" />
            <button class="btn btn-block">Apply</button>
        </div>
    );
};

export default ProductSum;