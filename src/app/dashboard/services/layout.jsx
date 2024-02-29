import style from "./services.module.css"

const Layout = ({children}) => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                Part1
                {children}
            </div>
            <div className={style.content}>
                Part2
                {children}
            </div>
        </div>
    )
}

export default Layout