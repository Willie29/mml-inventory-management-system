"use client";
import { Messaege } from "../../../helper/Message";
import Layouts from "../../../components/layouts";
import { getAllOrders, getAllStocks, postOrder, updateOrder } from "../../../api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import moment from "moment";

const Orders = () => {
  const router = useRouter();
  const cartRedux = useSelector((state) => state.addOrder.order);
  console.log(cartRedux);
  const [machine, setMachine] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [data2, setData2] = useState([]);

  const handleSUbmit = async (id) => {
    try {
      const response = await updateOrder(`/${id}`, {
        status: "confirmed",
      });
      Messaege("Succes", "Success Order", "success");
      setTimeout(() => {
        router.push("/home");
      }, 2000);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  function getStocks() {
    getAllOrders().then((res) => {
      var tempList = [];
      tempList = res.data.data;
      console.log("List Data => ", tempList);
      setData2(tempList);
    });
  }
  useEffect(() => {
    getStocks();
  }, []);
  return (
    <Layouts>
      <div className="container">
        <div>
          <div className="card">
            <div className="flex">
              <h5>List Ordered Item</h5>
              <h5>Requested Dates : {cartRedux.requestDate}</h5>
            </div>
            <h5>Request Form</h5>

            <table className="mt-3">
              <tr className="mt-5">
                <td width="100">Applicant Staff</td>
                <td width="15">:</td>
                <td>{cartRedux.employee}</td>
              </tr>
              <tr className="mt-5">
                <td>Activity</td>
                <td>:</td>
                <td>{cartRedux.activity}</td>
              </tr>
              <tr className="mt-5">
                <td>Division</td>
                <td>:</td>
                <td>{cartRedux.division}</td>
              </tr>
              <tr className="mt-5">
                <td>Machine</td>
                <td>:</td>
                <td>{cartRedux.machine}</td>
              </tr>
            </table>

            <table className="mt-5">
              <thead>
                <tr>
                  <th>Name Of The Product</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>UOM</th>
                  <th>Request Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data2.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.qty}</td>
                    <td>{item.uom}</td>

                    <td>{moment(item.createdAt).format("MMMM Do YYYY")}</td>
                    <td onClick={() => {
                      if (item.status !== "confirmed") {
                        handleSUbmit(item.id)
                      }
                    }}>
                      <span
                        className={`badge ${item.status === "confirmed" ? 'badge-success' : 'badge-primary'}`}
                        style={{ color: item.status === "confirmed" ? 'black' : 'white', cursor: "pointer" }}
                      >
                        {item.status === "confirmed" ? "Confirmed" : "Confirm"}
                      </span>
                    </td>
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

export default Orders;
