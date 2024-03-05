'use client'

import { usePathname } from "next/navigation"

const navbar = () => {
    
    const pathName = usePathname();

    return (
        <div className="navbar bg-neutral text-neutral-content rounded-full">
            <button className="btn btn-ghost text-xl">{pathName}</button>
        </div>
    )
}

export default navbar