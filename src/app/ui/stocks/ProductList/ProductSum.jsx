const Products = [
    {
        title: "Shampoo",
        amount: 1,
    },
    {
        title: "Soaps",
        amount: 1,
    },
    {
        title: "Cool Stuffs",
        amount: 2,
    },
    {
        title: "Very Nice Shampoo",
        amount: 2,
    },
]

const ProductSum = () => {
    return (
        <div>
            <div class="divider text-xl">ยอดรวม</div>
            <ul>
            {Products.map((cat) =>(
                <li key={cat.title}>
                        {cat.title} : {cat.amount}
                </li>
            ))}
            <button class="btn">Checkout!</button>
            </ul>
            <div class="divider"></div>
        </div>
    );
};

export default ProductSum;