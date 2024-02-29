'use client'

import { usePathname } from "next/navigation"

const navbar = () => {
    
    const pathName = usePathname();

    return (
        <div class="navbar bg-neutral text-neutral-content">
            <button class="btn btn-ghost text-xl">{pathName}</button>
        </div>
    )
}

export default navbar