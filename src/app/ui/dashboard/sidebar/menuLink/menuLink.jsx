import Link from 'next/link'
import style from "./menuLink.module.css"

const menuLink = ({item}) => {
    return (
        <Link href={item.path} className={style.container}>
            {item.icon}
            {item.title}
        </Link>
    )
}

export default menuLink