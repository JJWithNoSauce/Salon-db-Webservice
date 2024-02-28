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
        <div>
            <ul>
            {Products.map((cat) =>(
                <li key={cat.title}>
                    <div>
                        <img src="https://png.pngtree.com/png-clipart/20221211/ourmid/pngtree-shampoo-clipart-png-image_6519245.png" alt="" width="100" height="100"/>
                    </div>
                    
                    <button class="btn btn-ghost text-xl">
                        {cat.title}
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