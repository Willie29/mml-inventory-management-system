"use client";
import {useEffect, useState} from "react";
import Layouts from "../components/layouts";
import {getAllOrders, getAllStocks} from "../api";
import moment from "moment";
import {useRouter} from "next/navigation";
import {useDispatch} from "react-redux";
import {orders, products, requests} from "../stores/thunk";

const Page = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [data, setData] = useState([]);
    const [dataRequest, setDataRequest] = useState([])
    const [dataProducts, setDataProducts] = useState([])

    const getOrders = async () => {
        const orderUser = await dispatch(orders.getAllOrders());
        setData(orderUser.payload.data.data);
    }

    const getProducts = async () => {
        const productsResult = await dispatch(products.getAllProducts('zero'))
        setDataProducts(productsResult.payload.data.data)
    }

    const getRequestProduct = async () => {
        const productsResult = await dispatch(requests.getAllRequests())
        setDataRequest(productsResult.payload.data.data)
    }

    useEffect(() => {
        (async () => {
            await getOrders();
            await getProducts();
            await getRequestProduct();
        })()
    }, []);

    const toEditPage = () => {
        router.push(`/items/stock`);
    };
    const toEditPage2 = () => {
        router.push(`/items/orders`);
    };
    return (<Layouts>
        <div className="container">
            <div>
                <h1>Welcome, {localStorage.getItem("nama")}</h1>

                <div className="card">
                    <h2>Multi Makmur Lemindo Tbk Management System </h2>
                    <p>
                        This website is used to help manage the inventory of PT Multi
                        Makmur Lemindo Tbk
                    </p>
                </div>
            </div>

            <div className="mt-5">
                {localStorage.getItem("role") == "admin" ? (<>
                    <h1 style={{marginTop: "70px"}}>Out Of Items</h1>

                    <div
                        className="card"
                        style={{marginTop: "10px", marginBottom: "70px"}}
                    >
                        <table>
                            <thead>
                            <tr>
                                <th>Name Of The Product</th>
                                <th>Category</th>
                                <th>Location</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {dataProducts?.map((item, index) => (<tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{item.Location?.name}</td>
                                <td>
                          <span
                              className="badge badge-primary"
                              style={{color: "white", cursor: "pointer"}}
                              onClick={toEditPage}
                          >
                            Edit Stock
                          </span>
                                </td>
                            </tr>))}
                            </tbody>
                        </table>
                    </div>
                </>) : (<></>)}

                <h1>My Order Items</h1>

                <div className="card">
                    <table>
                        <thead>
                        <tr>
                            <th>Aplication Staff</th>
                            <th>Requested Date</th>
                            <th>Location</th>
                            <th>Confirmed Date</th>
                            {localStorage.getItem("role") == "admin" ? (<></>) : (<th>Status</th>)}
                        </tr>
                        </thead>
                        <tbody>
                        {data?.map((item, index) => (<tr key={index}>
                            <td>{item.applicantStaff}</td>
                            <td>{moment(item.requestDate).format("MMMM Do YYYY")}</td>
                            <td>{item.Location?.name}</td>
                            <td>{item.status == "pending" ? "-" : moment(item.updatedAT).format("MMMM DD YYYY")}</td>
                            {localStorage.getItem("role") == "admin" ? (<></>) : (<td>
                                    <span
                                        className={`${item.status == "pending" ? "badge badge-error" : "badge badge-success"}`}
                                    >
                                        {item.status}
                                </span>
                            </td>)}
                            <td>
                      <span
                          className="badge badge-primary"
                          style={{color: "white", cursor: "pointer"}}
                          onClick={toEditPage2}
                      >
                        More info
                      </span>
                            </td>
                        </tr>))}
                        </tbody>
                    </table>
                </div>
                <h1 style={{marginTop: "70px"}}>My Request Items</h1>

                <div
                    className="card"
                    style={{marginTop: "10px", marginBottom: "70px"}}
                >
                    <table>
                        <thead>
                        <tr>
                            <th>Name Of The Product</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>UOM</th>
                            <th>Request Date</th>
                            {localStorage.getItem("role") == "admin" ? (<></>) : (<th>Status</th>)}
                        </tr>
                        </thead>
                        <tbody>
                        {dataRequest?.map((item, index) => (<tr key={index}>
                            <td>{item?.Product?.name}</td>
                            <td>{item?.Product?.category}</td>
                            <td>{item.quantity}</td>
                            <td>{item.uom}</td>

                            <td>{moment(item.createdAt).format("MMMM Do YYYY")}</td>
                            {localStorage.getItem("role") == "admin" ? (<></>) : (<td>
                                {" "}
                                <span
                                    className={`${item.status == "out_stock" ? "badge badge-error" : "badge badge-success"}`}
                                >
                          {item.status}
                        </span>
                            </td>)}
                        </tr>))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </Layouts>);
};

export default Page;
