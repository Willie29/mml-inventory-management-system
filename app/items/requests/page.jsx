"use client";
import {getAllStocks} from "../../api";
import Layouts from "../../components/layouts";
import {useEffect, useState} from "react";
import moment from "moment";
import {useRouter} from "next/navigation";

const Requestsnpm = () => {
    const router = useRouter();

    const [data2, setData2] = useState([]);
    const [search, setSearch] = useState("");

    function getStocks() {
        getAllStocks(`search=${search}`).then((res) => {
            var tempList = [];
            tempList = res?.data?.data;
            console.log("List Data => ", tempList);
            setData2(tempList);
        });
    }

    useEffect(() => {
        getStocks();
    }, []);
    const postRequest = async () => {
        router.push("/items/requests/addrequest");
    };
    const toEditPage = (id) => {
        router.push(`/items/requests/${id}`);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            // Call the function to perform the search here
            getStocks();
        }
    }

    return (
        <Layouts>
            <div className="container">
                <div>
                    <h1>Requested Items</h1>
                    {localStorage.getItem("role") == "admin" ? (
                        <></>
                    ) : (
                        <div style={{width: "500px"}}>
                            <button
                                type="button"
                                onClick={postRequest}
                                className="mb-3 mt-2 input-stock-btn"
                            >
                                Add Request
                            </button>
                        </div>
                    )}
                    <div className="card">
                        <h5>List of Requested Items</h5>

                        <div className="filter-table">
              <span>
                <label htmlFor="" className="mr-3">
                  Show
                </label>
                <select name="show" id="" className="mr-3">
                  <option value="10">10</option>
                  <option value="25">25</option>
                </select>
                entries
              </span>
                            <span>
                <label htmlFor="" className="mr-3">
                  Search
                </label>
                <input
                    type="text"
                    className="search"
                    onChange={e => setSearch(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
              </span>
                        </div>

                        <table>
                            <thead>
                            <tr>
                                <th>Name Of The Product</th>
                                <th>Category</th>
                                <th>Quantity</th>
                                <th>UOM</th>
                                <th>Location</th>
                                {localStorage.getItem("role") == "admin" ? (
                                    <></>
                                ) : (
                                    <th>Status</th>
                                )}
                            </tr>
                            </thead>
                            <tbody>
                            {data2?.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.uom}</td>
                                    <td>{item.location}</td>

                                    {localStorage.getItem("role") == "admin" ? (
                                        <></>
                                    ) : (
                                        <td>
                        <span
                            className={`${
                                item.status == "out_stock"
                                    ? "badge badge-error"
                                    : "badge badge-success"
                            }`}
                        >
                          {item.status}
                        </span>
                                        </td>
                                    )}

                                    {localStorage.getItem("role") == "admin" ? (
                                        <td onClick={() => toEditPage(item.id)}>
                        <span
                            className="badge badge-primary"
                            style={{color: "white", cursor: "pointer"}}
                        >
                          Add Stock
                        </span>
                                        </td>
                                    ) : (
                                        <></>
                                    )}
                                </tr>
                            ))}
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
};

export default Requestsnpm;
