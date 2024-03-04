import comms from "./hislist"

const HistabCommission = async () => {
    
    const res= await fetch('http://localhost:3000/api/getsercom',{
        next: {revalidate:1}
    })
    const sercom = await res.json()
    
    return (
        <div>
            <div className="divider text-xl">Commission History</div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Comid</th>
                            <th>Em_Id</th>
                            <th>Startdate</th>
                            <th>Enddate</th>
                            <th>Rate</th>
                            <th>Get</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sercom.map((cat) => (
                            <tr key={cat.commissionid}>
                                <td>{cat.commissionid}</td>
                                <td>{cat.Em_id}</td>
                                <td>{cat.CommissionStartDate}</td>
                                <td>{cat.CommissionEndDate}</td>
                                <td>{cat.CommissionRate}</td>
                                <td>{cat.CommissionGet}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HistabCommission;