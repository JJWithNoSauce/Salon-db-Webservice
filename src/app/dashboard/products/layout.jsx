import style from "./products.module.css"
import List from "/src/app/ui/stocks/ProductList/ProductList.jsx"
import Sum from "/src/app/ui/stocks/ProductList/ProductSum.jsx"

const Layout = ({children}) => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                Part1
                {children}
                <List/>
            </div>
            <div className={style.content}>
                Part2
                {children}
                <Sum/>
            </div>
        </div>
    )
}

export default Layout