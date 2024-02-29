import style from "../products.module.css"
const productMaintain = ({params}) => {
    return (
        <div>
             <div class="divider text-xl">รายละเอียดสินค้า</div>
             
                <div class="text-xl">{"ชื่อสินค้า : " + params.productName}</div>
                <div class="text-xl">{"ขนาดสินค้า: " + params.size}</div>
                <div class="text-xl">{"ประเภทสินค้า : " + params.type}</div>
                <div class="text-xl">{"จำนวนสินค้า : " + params.amount}</div>
                <div class="text-xl">{"ราคาสินค้า : " + params.price}</div>
            
            <div class="divider text-xl"></div>
            <div class="divider text-xl">ปรับแต่งข้อมูลสินค้า</div>

            <form className={style.content}>
                <input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Size" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Amount" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Price" class="input input-bordered w-full max-w-xs" />
            </form>
            
            <div class="divider text-xl"></div>
            <div className={style.content}>
                <button class="btn glass btn-block text-xl">Confirm ปรับแต่ง</button> 
            </div>
            <div class="divider text-xl"></div>
            
        </div>
    )
}

export default productMaintain