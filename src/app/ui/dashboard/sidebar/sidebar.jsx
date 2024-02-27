import style from "../dashboard.module.css"

const sidebar = () => {
    return (
        <div className={style.container}>
        <ul class="menu bg-base-200 w-56 rounded-box">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
            <li><a>Item 4</a></li>
            <li><a>Item 5</a></li>
            <li><a>Item 6</a></li>
            <li><a>Item 7</a></li>
            <li><a>Item 8</a></li>
            <li><a>Item 9</a></li>
        </ul>
        </div>
    )
}

export default sidebar