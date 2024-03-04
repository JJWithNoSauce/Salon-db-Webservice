import comms from "./hislist"

const HistabProducts = () => {
    return (
        <div>
            <div className="divider text-xl">Products History</div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Comid</th>
                            <th>Id</th>
                            <th>Startdate</th>
                            <th>Enddate</th>
                            <th>Rate</th>
                            <th>Get</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comms.map((cat) => (
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

export default HistabProducts;