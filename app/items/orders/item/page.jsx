import Layouts from "../../../components/layouts";
import Link from "next/link";

const Orders = () => {
    return (
        <Layouts>
            <div className="container">
                <div>
                    <h1>Oredered Items</h1>

                    <div className="card">
                        <div className="flex">
                            <h5>List of Willyam Dyanata’s Ordered Item</h5>
                            <h5>Requested Dates : 2023-09-10</h5>
                        </div>

                        <table className="mt-3">
                            <tr>
                                <td width="100">Applicant Staff</td>
                                <td width="15">:</td>
                                <td>Willyam Dyanata</td>
                            </tr>
                            <tr>
                                <td>Activity</td>
                                <td>:</td>
                                <td>Corrective</td>
                            </tr>
                            <tr>
                                <td>Division</td>
                                <td>:</td>
                                <td>PL-EXTRUTION</td>
                            </tr>
                            <tr>
                                <td>Machine</td>
                                <td>:</td>
                                <td>Vacum Central</td>
                            </tr>
                        </table>

                        <table className="mt-5">
                            <thead>
                                <tr>
                                    <th>Name of the product</th>
                                    <th>Category</th>
                                    <th>QTY</th>
                                    <th>UOM</th>
                                    <th>Requested Dates</th>
                                    <th>Location</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>PVC Rubicon</td>
                                    <td>Pipa</td>
                                    <td>100</td>
                                    <td>Pcs</td>
                                    <td>2023-09-10</td>
                                    <td>Vacum Central</td>
                                    <td><Link href="" className="badge-success">Confirm</Link></td>
                                </tr>
                                <tr>
                                    <td>PVC Rubicon</td>
                                    <td>Pipa</td>
                                    <td>100</td>
                                    <td>Pcs</td>
                                    <td>2023-09-10</td>
                                    <td>Vacum Central</td>
                                    <td><Link href="" className="badge-success">Confirm</Link></td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="mt-2 pagination">
                            <span>Showing 1 to 2 out of 2 entries</span>
                            <span>
                                <button type="button">Previous</button>
                                <button type="button">Next</button>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </Layouts>
    );
}

export default Orders;