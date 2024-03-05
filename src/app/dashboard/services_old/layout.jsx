import style from "./layout.module.css"
import Navbar from "./Navbar"

const Layout = ({children}) => {
    return (
        <div className={style.container}>
            <div>
                <Navbar/>
                {children}
            </div>
        </div>
    )
}

export default Layout
