"use client";
import Layouts from "../../../components/layouts";
import { useRouter } from "next/navigation";
import { updateStock } from "../../../api";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Messaege } from "../../../helper/Message";

const Page = () => {
  const router = useRouter();
  const { id } = useParams();

  const [qty, setQty] = useState(0);
  const [selectedOption, setSelectedOption] = useState('Mitra Utama');
  const handleSelectChange = (event) => {
    // Get the selected value from the event
    const selectedValue = event.target.value;

    // Update the state with the selected value
    setSelectedOption(selectedValue);

    // You can perform any additional actions based on the selected value here
    console.log("Selected option:", selectedValue);
  };
  const updateStockItems = async () => {
    try {
      const response = await updateStock(`/${id}`, {
        qty: qty,
        location: selectedOption,
      });
      Messaege("Succes", "Success submitted", "success");
      setTimeout(() => {
        router.push("/items/stock");
      }, 2000);
      console.log(response);
    } catch (error) {
      console.log(error);
      Messaege("Failed", `failed submiited`, "error");
    }
  };
  return (
    <Layouts>
      <div className="container">
        <div>
          <h1>Edit Stock</h1>
          <div className="card">
            <h2 className="mt-5 text-center">Edit Stock</h2>

            <input type="text" onChange={(e) => setQty(e.target.value)} className="input-stock" />
            <span>
              <label htmlFor="" className="mr-3" style={{ display: "block" }}>
                Location
              </label>
              <select
                name="show"
                id=""
                className="mr-3"
                style={{ width: "200px", padding: "5px" }}
                onChange={handleSelectChange}
                value={selectedOption}

              >
                <option value="Mitra Utama">Mitra Utama</option>
                <option value="Vacum Central">Vacum Central</option>
                <option value="Pima Utama">Pima Utama</option>
                <option value="Park Center">Park Center</option>
              </select>
            </span>

            <button type="button" onClick={updateStockItems} className="mt-5 input-stock-btn">
              Update
            </button>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Page;
