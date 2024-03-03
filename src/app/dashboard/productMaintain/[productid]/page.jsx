import style from "../products.module.css"

const productMaintain = async ({params}) => {
    const res= await fetch('http://localhost:3000/api/getproduct/'+params.productid)
    const product = await res.json()

    return (
        <div>
             <div class="divider text-xl">รายละเอียดสินค้า</div>
                
                <div class="text-xl">{"ชื่อสินค้า : " + product[0].product_name}</div>
                <div class="text-xl">{"ขนาดสินค้า: " + product[0].product_size}</div>
                <div class="text-xl">{"ประเภทสินค้า : " + product[0].product_type}</div>
                <div class="text-xl">{"จำนวนสินค้า : " + product[0].product_amount}</div>
                <div class="text-xl">{"ราคาสินค้า : " + product[0].product_price}</div>
            
            <div class="divider text-xl"></div>
            <div class="divider text-xl">ปรับแต่งข้อมูลสินค้า</div>

            <form className={style.content}>
                <input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Size" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Amount" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Price" class="input input-bordered w-full max-w-xs" />
                <button class="btn glass btn-block text-xl">Confirm ปรับแต่ง</button> 
            </form>
            
            
        </div>
    )
}

export default productMaintain