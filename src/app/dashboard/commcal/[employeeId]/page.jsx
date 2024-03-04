import style from "../products.module.css"
import Link from 'next/link'

const history = async ({params}) => {
    const comcal= await fetch('http://localhost:3000/api/getcomcal/'+params.employeeId,{
        next: {revalidate:1}
    })
    const calinfo = await comcal.json()

    const serbill= await fetch('http://localhost:3000/api/getserbill/'+params.employeeId,{
        next: {revalidate:1}
    })
    const serinfo = await serbill.json()
    
    
    return (
        <div className={style.menu}>
            <div class="divider"></div>
        </div>
    )
}

export default history