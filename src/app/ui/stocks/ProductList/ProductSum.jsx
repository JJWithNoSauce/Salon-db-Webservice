import style from "./productList.module.css"

const Products = [
    {
        title: "ZOYA",
        amount: 2,
        price: 290,
    },
    {
        title: "Pantene",
        amount: 1,
        price:189,
    }
]

const sumPrice = Products.reduce((total, product) => {
    return total + product.amount * product.price;
}, 0);

const ProductSum = () => {
    return (
        <div>
            <div class="divider text-xl">ยอดรวม</div>
            <ul>
            {Products.map((cat) =>(
                <li key={cat.title}>
                    <div className = {style.sumlist}>{cat.title} : {cat.amount} ชิ้น</div>
                    <div className = {style.sumlist}>{"ราคารวม : " + (cat.amount * cat.price) + " บาท"}</div>
                    <div class="divider"></div>
                </li>
            ))}
            <div class="divider">รวมยอด</div>
            <div className = {style.sumlist}>{sumPrice} บาท</div>
            <div class="divider"></div>
            <button class="btn">Checkout!</button>
            </ul>
            <div class="divider"></div>
        </div>
    );
};

export default ProductSum;