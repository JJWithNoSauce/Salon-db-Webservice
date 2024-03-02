import style from "../users/adduser/user.module.css"


const Layout = ({children}) => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <List/>
            </div>
            <div className={style.content}>
                <Sum/>
            </div>
        </div>
    )
}

export default Layout