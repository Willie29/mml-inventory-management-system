"use client"
import { useEffect, useState } from "react";
import Layouts from "../components/layouts";
import {useDispatch} from "react-redux";
import {Messaege} from "../helper/Message";
import {users} from "../stores/thunk";

const Employee = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const getAllEmployee = async () => {
    try {

      if(search) {
        const employee = await dispatch(users.getAllUser({
          role: 'employee',
          name: search
        }))
        console.log(employee)

        if(employee?.payload?.data) {
          setData(employee.payload.data.data)
          return
        }
        throw {message: 'Not Found'}
      }

      const employee = await dispatch(users.getAllUser({
        role: 'employee'
      }))

      if(employee?.payload?.data) {
        setData(employee.payload.data.data)
      }

    } catch (error) {
      Messaege('Error', error.message, "error");
    }
  }


  useEffect(() => {
    getAllEmployee();
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      getAllEmployee();
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
                  <td>{item?.phone}</td>
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
