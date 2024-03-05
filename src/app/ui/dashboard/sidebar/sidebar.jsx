'use client'

import Link from 'next/link'
import { redirect } from "next/dist/server/api-utils";
import style from "./sidebar.module.css"
import {FaUser,FaBox,FaDatabase,FaBath,FaBarcode,FaClipboardList,FaBook,FaCashRegister,FaUserTie,FaPumpSoap} from "react-icons/fa"

const menuItems = [
    /*{
        title: "Dashboard",
        path: "/dashboard",
        icon: <FaDatabase />,
    },*/
    /*{
        title: "Commissions",
        path: "/dashboard/commission",
        icon: <FaCashRegister />,
    },*/
    {
        title: "สินค้า",
        path: "/dashboard/products",
        icon: <FaPumpSoap />,
    },
    {
        title: "บริการ",
        path: "/dashboard/services",
        icon: <FaBath />,
    },
    {
        title: "ประวัติ",
        path: "/dashboard/history",
        icon: <FaBook />,
    },
    {
        title: "พนักงาน",
        path: "/dashboard/users",
        icon: <FaUserTie />,
    },
    {
        title: "ลูกค้า",
        path: "/dashboard/register",
        icon: <FaUser />,
    },
];

const MaintainItems = [
    {
        title: "จัดการสินค้า",
        path: "/dashboard/productMaintain",
        icon: <FaBarcode />,
    },
    {
        title: "จัดการบริการ",
        path: "/dashboard/servicesMaintain",
        icon: <FaBarcode />,

    },

    {
        
        title: "จัดการพนักงาน",
        path: "/dashboard/usersMaintain",
        icon: <FaBarcode />,
    }
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
        <summary class="collapse-title text-xl font-medium">การจัดการ</summary>
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