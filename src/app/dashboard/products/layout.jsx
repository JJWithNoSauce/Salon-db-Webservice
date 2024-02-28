import style from "./products.module.css"
import List from "/home/jjwithnosauce/Salon-db_nextJS/src/app/ui/stocks/ProductList/ProductList.jsx"
import Sum from "/home/jjwithnosauce/Salon-db_nextJS/src/app/ui/stocks/ProductList/ProductSum.jsx"

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