"use client"
import { useEffect, useState } from "react";
import Layouts from "../components/layouts";
import { getEmployee } from "../api";

const Employee = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  function getAllEmployee() {
    getEmployee().then((res) => {
      var tempList = [];
      tempList = res.data.data;
      console.log("List Data => ", tempList);
      setData(tempList);
    });
  }
  useEffect(() => {
    getAllEmployee();
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      getEmployee(`search=${search}`).then((res) => {
        var tempList = [];
        tempList = res.data.data;
        console.log("List Data => ", tempList);
        setData(tempList);
      });
    }
  }

  return (
    <Layouts>
      <div className="container">
        <div>
          <h1>Employee</h1>

          <div className="card">
            <h5>List of Employee</h5>

            <div className="filter-table">
              <span></span>
              <span>
                <label htmlFor="" className="mr-3">
                  Search
                </label>
                <input
                    onChange={e => setSearch(e.target.value)}
                    onKeyPress={handleSearch}
                    type="text"
                    className="search"
                />
              </span>
            </div>

            <table className="mt-4">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
              {data?.map((item, index) => (
                  <tr key={index}>
                  <td>{item.firstName} {item.lastName}</td>
                  <td>{item.phone}</td>
                  <td>{item.position}</td>
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

export default Employee;
