'use client'

import Link from 'next/link'
import { redirect } from "next/dist/server/api-utils";
import style from "./sidebar.module.css"
import {FaUser,FaBox,FaDatabase,FaBath,FaBarcode,FaClipboardList,FaBook,FaCashRegister} from "react-icons/fa"

const menuItems = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <FaDatabase />,
    },
    {
        title: "Commissions",
        path: "/dashboard/commission",
        icon: <FaCashRegister />,
    },
    {
        title: "Products",
        path: "/dashboard/products",
        icon: <FaBox />,
    },
    {
        title: "Services",
        path: "/dashboard/services",
        icon: <FaBath />,
    },
    {
        title: "History",
        path: "/dashboard/history",
        icon: <FaBook />,
    },
    {
        title: "Users",
        path: "/dashboard/users",
        icon: <FaUser />,
    },
];

const MaintainItems = [
    {
        title: "Product Maintain",
        path: "/dashboard/productMaintain",
        icon: <FaBarcode />,
    },
    {
        title: "Service Maintain",
        path: "/dashboard/servicesMaintain",
        icon: <FaBarcode />,
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
            
        
        <details class="collapse bg-base-200">
        <summary class="collapse-title text-xl font-medium">Maintaining</summary>
            <div class="collapse-content"> 
            <ul className={style.list}>
            {MaintainItems.map((cat) =>(
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
                </details>
        </div>
    );
};

export default sidebar;