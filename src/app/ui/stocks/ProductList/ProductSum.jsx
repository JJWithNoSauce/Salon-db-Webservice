import style from "./productList.module.css"

const Products = [
    {
        title: "Shampoo",
        amount: 1,
        price:30,
    },
    {
        title: "Soaps",
        amount: 1,
        price:40,
    },
    {
        title: "Cool Stuffs",
        amount: 3,
        price:50,
    },
    {
        title: "Very Nice Shampoo",
        amount: 2,
        price:100,
    },
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