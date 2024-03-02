import Link from "next/link"

export default function success(){
    return(
        <> 
            <div>
                <div className="card-body">
                    <h2 className="card-title">เสร็จสิ้น</h2>
                    <p>ดำเนินการเสร็จสิ้น</p>
                    <div>
                        <Link href="/dashboard">
                            <button className="btn">เสร็จสิ้น</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}