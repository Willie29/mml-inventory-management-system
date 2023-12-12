"use client";
import { postStoks, register } from "../../../api";
import Layouts from "../../../components/layouts";
import Link from "next/link";
import { useState } from "react";
import { Messaege } from "../../../helper/Message";
import { useRouter } from "next/navigation";

const Employee = () => {
  const router = useRouter();
  const [name, setname] = useState("");
  const [category, setcategory] = useState("");
  const [uom, setuom] = useState("");
  const [qty, setqty] = useState("");
  const [location, setlocation] = useState("");

  const postRequest = async () => {
    try {
      const response = await postStoks({
        name,
        category,
        uom,
        qty,
        location,
        status: "out_stock",
      });
      Messaege("Succes", "Success submitted", "success");
      setTimeout(() => {
        router.push("/home");
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
          <div className="card">
            <h1 className="text-center mt-5">Add Request</h1>

            <div className="card">
              <div className="mt-4">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  className="form-control input-stock"
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="">Category</label>
                <input
                  type="text"
                  className="form-control input-stock"
                  onChange={(e) => setcategory(e.target.value)}
                />
              </div>
              <div className="mt-1">
                <label htmlFor="">Quantity</label>
                <input
                  type="text"
                  className="form-control input-stock"
                  onChange={(e) => setqty(e.target.value)}
                />
              </div>
              <div className="mt-1">
                <label htmlFor="">UOM</label>
                <input
                  type="text"
                  className="form-control input-stock"
                  onChange={(e) => setuom(e.target.value)}
                />
              </div>
              <div className="mt-1">
                <label htmlFor="">Location</label>
                <input
                  type="text"
                  className="form-control input-stock"
                  onChange={(e) => setlocation(e.target.value)}
                />
              </div>
              <button
                type="button"
                onClick={postRequest}
                className="mt-5 input-stock-btn"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Employee;
