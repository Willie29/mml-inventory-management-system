"use client";
import { useEffect, useState } from "react";
import Layouts from "../components/layouts";
import { getAllOrders, getAllStocks } from "../api";
import moment from "moment";
import { useRouter } from "next/navigation";
import axios from "axios";
const Page = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  async function getOrders() {
    const result = await axios.get(`${process.env.API_URL}/api/orders`)
    console.log("result", result);

    getAllOrders().then((res) => {
      var tempList = [];
      tempList = res.data.data;
      console.log("List Data => ", tempList);
      setData(tempList);
    });
  }
  useEffect(() => {
    getOrders();
  }, []);
  function getStocks() {
    getAllStocks().then((res) => {
      var tempList = [];
      tempList = res?.data?.data;
      console.log("List Data => ", tempList);
      setData2(tempList);
    });
  }
  useEffect(() => {
    getStocks();
  }, []);

  const toEditPage = () => {
    router.push(`/items/stock`);
  };
  const toEditPage2 = () => {
    router.push(`/items/orders`);
  };
  return (
    <Layouts>
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
          {localStorage.getItem("role") == "admin" ? (
            <>
              <h1 style={{ marginTop: "70px" }}>Out Of Items</h1>

              <div
                className="card"
                style={{ marginTop: "10px", marginBottom: "70px" }}
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
                    {data2?.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>{item.location}</td>
                        <td>
                          <span
                            className="badge badge-primary"
                            style={{ color: "white", cursor: "pointer" }}
                            onClick={toEditPage}
                          >
                            Edit Stock
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <></>
          )}

          <h1>My Order Items</h1>

          <div className="card">
            <table>
              <thead>
                <tr>
                  <th>Aplication Staff</th>
                  <th>Requested Date</th>
                  <th>Location</th>
                  <th>Confirmed Date</th>
                  {localStorage.getItem("role") == "admin" ? (
                    <></>
                  ) : (
                    <th>Status</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{moment(item.requestDate).format("MMMM Do YYYY")}</td>
                    <td>{item.location}</td>
                    <td>{item.status == "pending" ? "-" : moment(item.updatedAT).format("MMMM DD YYYY")}</td>
                    {localStorage.getItem("role") == "admin" ? (
                      <></>
                    ) : (
                      <td>
                        {" "}
                        <span
                          className={`${
                            item.status == "pending"
                              ? "badge badge-error"
                              : "badge badge-success"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    )}
                    <td>
                      <span
                        className="badge badge-primary"
                        style={{ color: "white", cursor: "pointer" }}
                        onClick={toEditPage2}
                      >
                        More info
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h1 style={{ marginTop: "70px" }}>My Request Items</h1>

          <div
            className="card"
            style={{ marginTop: "10px", marginBottom: "70px" }}
          >
            <table>
              <thead>
                <tr>
                  <th>Name Of The Product</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>UOM</th>
                  <th>Request Date</th>
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

                    <td>{moment(item.createdAt).format("MMMM Do YYYY")}</td>
                    {localStorage.getItem("role") == "admin" ? (
                      <></>
                    ) : (
                      <td>
                        {" "}
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Page;
