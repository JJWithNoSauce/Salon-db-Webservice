import Maintain from "/src/app/ui/stocks/ProductList/ProductMaintain.jsx"
import Config from "/src/app/ui/stocks/ProductList/ProductConfig.jsx"
import style from "./products.module.css"
import Link from 'next/link'

const Layout = ({children}) => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                Part1
                {children}
                <Link href={"/dashboard/productAdd"}>
                        <button class="btn glass btn-block text-xl">
                            Add Product
                        </button>
                </Link>
                <Maintain/>
            </div>
            <div className={style.content}>
                Part2
                {children}
                Pick product to config.
            </div>
        </div>
    )
}

export default Layout