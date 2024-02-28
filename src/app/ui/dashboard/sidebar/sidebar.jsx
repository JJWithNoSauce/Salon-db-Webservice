'use client'

import Link from 'next/link'
import { redirect } from "next/dist/server/api-utils";
import style from "./sidebar.module.css"
import {FaUser,FaBox,FaDatabase,FaBath,FaBarcode} from "react-icons/fa"

const menuItems = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <FaDatabase />,
    },
    {
        title: "Products",
        path: "/dashboard/products",
        icon: <FaBox />,
    },
    {
        title: "Maintain",
        path: "/dashboard/products/productMaintain",
        icon: <FaBarcode />,
    },
    {
        title: "Services",
        path: "/dashboard/services",
        icon: <FaBath />,
    },
    {
        title: "Users",
        path: "/dashboard/users",
        icon: <FaUser />,
    },
];


const sidebar = () => {
    return (
        <div className={style.container}>
            <ul className={style.list}>
            {menuItems.map((cat) =>(
                <li key={cat.title}>
                    <Link href={cat.path}>
                        <button class="btn btn-ghost text-xl" className={style.cat}>
                            {cat.icon}{cat.title}
                        </button>
                    </Link>
                </li>
            ))}
            </ul>
        </div>
    );
};

export default sidebar;