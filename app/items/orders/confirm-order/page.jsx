"use client";
import { Messaege } from "../../../helper/Message";
import Layouts from "../../../components/layouts";
import { postOrder } from "../../../api";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const Orders = () => {
  const router = useRouter();
  const cartRedux = useSelector((state) => state.addCart.cart);
  const [machine, setMachine] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [name, setName] = useState("");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  const handleOptionChange2 = (value) => {
    setSelectedOption2(value);
  };

  const handleSUbmit = async (e) => {
    try {
      e.preventDefault();
      console.log(cartRedux, "test")
      const response = await postOrder({
        employeeId: localStorage.getItem("iduser"),
        name: name,
        category: cartRedux.category,
        qty: cartRedux.qty,
        uom: cartRedux.uom,
        location: cartRedux.location,
        machine: machine,
        division: selectedOption2,
        activity: selectedOption,
        employee: localStorage.getItem("nama"),
        status: "pending",
        idProduct: cartRedux.idProduct,
      });
      Messaege("Succes", "Success Order", "success");
      setTimeout(() => {
        router.push("/items/orders/cart");
      }, 2000);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layouts>
      <div className="container">
        <div>
          <div className="card">
            <h5>Request Form</h5>

            <table className="mt-3">
              <tr className="mt-5">
                <td width="100">Applicant Staff</td>
                <td width="15">:</td>
                <td>
                  {" "}
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    className="input-order"
                  />
                </td>
              </tr>
              <tr className="mt-5">
                <td>Activity</td>
                <td>:</td>
                <td>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ marginRight: "20px" }}>
                      <input
                        type="radio"
                        id="corrective"
                        name="options"
                        value="corrective"
                        checked={selectedOption === "corrective"}
                        onChange={() => handleOptionChange("corrective")}
                      />
                      <label htmlFor="corrective">Corrective</label>
                    </div>

                    <div style={{ marginRight: "20px" }}>
                      <input
                        type="radio"
                        id="preventive"
                        name="options"
                        value="preventive"
                        checked={selectedOption === "preventive"}
                        onChange={() => handleOptionChange("preventive")}
                      />
                      <label htmlFor="preventive">Preventive</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="other"
                        name="options"
                        value="other"
                        checked={selectedOption === "other"}
                        onChange={() => handleOptionChange("other")}
                      />
                      <label htmlFor="other">other</label>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="mt-5">
                <td>Division</td>
                <td>:</td>
                <td>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ marginRight: "20px" }}>
                      <input
                        type="radio"
                        id="Pl-EXTRUTIO"
                        name="options2"
                        value="Pl-EXTRUTION"
                        checked={selectedOption2 === "Pl-EXTRUTION"}
                        onChange={() => handleOptionChange2("Pl-EXTRUTION")}
                      />
                      <label htmlFor="Pl-EXTRUTIO">Pl-EXTRUTION</label>
                    </div>

                    <div style={{ marginRight: "20px" }}>
                      <input
                        type="radio"
                        id="PL-INJECTION"
                        name="options2"
                        value="PL-INJECTION"
                        checked={selectedOption2 === "PL-INJECTION"}
                        onChange={() => handleOptionChange2("PL-INJECTION")}
                      />
                      <label htmlFor="PL-INJECTION">PL-INJECTION</label>
                    </div>
                    <div style={{ marginRight: "20px" }}>
                      <input
                        type="radio"
                        id="PL-LEM"
                        name="options2"
                        value="PL-LEM"
                        checked={selectedOption2 === "PL-LEM"}
                        onChange={() => handleOptionChange2("PL-LEM")}
                      />
                      <label htmlFor="PL-LEM">PL-LEM</label>
                    </div>
                    <div style={{ marginRight: "20px" }}>
                      <input
                        type="radio"
                        id="GUDANG LOG"
                        name="options2"
                        value="GUDANG LOG"
                        checked={selectedOption2 === "GUDANG LOG"}
                        onChange={() => handleOptionChange2("GUDANG LOG")}
                      />
                      <label htmlFor="GUDANG LOG">GUDANG LOG</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="other"
                        name="options2"
                        value="other"
                        checked={selectedOption2 === "OTHER"}
                        onChange={() => handleOptionChange2("OTHER")}
                      />
                      <label htmlFor="other">OTHER</label>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="mt-5">
                <td>Machine</td>
                <td>:</td>
                <td>
                  {" "}
                  <input
                    type="text"
                    // placeholder="Enter Product Quantity"
                    onChange={(e) => setMachine(e.target.value)}
                    className="input-order"
                  />
                </td>{" "}
              </tr>
            </table>

            <table className="mt-5">
              <thead>
                <tr>
                  <th>Name of the product</th>
                  <th>Category</th>
                  <th>QTY</th>
                  <th>UOM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PVC Rubicon</td>
                  <td>Pipa</td>
                  <td>100</td>
                  <td>Pcs</td>
                </tr>
              </tbody>
            </table>

            <div style={{ width: "400", margin: "auto" }}>
              <button
                type="button"
                onClick={handleSUbmit}
                className="mt-5 input-stock-btn"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Orders;
