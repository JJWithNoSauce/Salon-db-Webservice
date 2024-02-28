import style from "./products.module.css"

const Layout = ({children}) => {
    return (
        <div className={style.menu}>
            <div className={style.content}>
                Part1
            </div>
            <div className={style.content}>
                Part2
                {children}
            </div>
        </div>
    )
}

export default Layout