"use client"
import Layouts from "../../components/layouts";
import {useState} from "react";
import {Messaege} from "../../helper/Message";
import {useRouter} from "next/navigation";
import {useDispatch} from "react-redux";
import {users} from "../../stores/thunk";

const Employee = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [position, setPosition] = useState("");
    const [role, setRole] = useState("employee");

    const PostEmployee = async () => {
        try {
            const response = await dispatch(users.registerUser({
                firstName,
                lastName,
                phone,
                username,
                email,
                password,
                position,
                role,
            }));
            Messaege("Succes", "Success submitted", "success");

            setTimeout(() => {
                router.push("/employee");
            }, 2000);
        } catch (error) {
            Messaege("Failed", `failed submiited`, "error");
        }
    };
    return (
        <Layouts>
            <div className="container">
                <div>
                    <div className="card">
                        <h1 className="text-center mt-5">Add Employee</h1>

                        <div className="card">
                            <div className="mt-4">
                                <label htmlFor="">First Name</label>
                                <input
                                    type="text"
                                    className="form-control input-stock"
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control input-stock"
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="mt-1">
                                <label htmlFor="">Email</label>
                                <input
                                    type="email"
                                    className="form-control input-stock"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mt-1">
                                <label htmlFor="">Username</label>
                                <input
                                    type="text"
                                    className="form-control input-stock"
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                            <div className="mt-1">
                                <label htmlFor="">Position</label>
                                <input
                                    type="text"
                                    className="form-control input-stock"
                                    onChange={(e) => setPosition(e.target.value)}
                                />
                            </div>
                            <div className="mt-1">
                                <label htmlFor="">Roles</label>
                                <select className="input-stock form-select form-select"
                                        onChange={(e) => setRole(e.target.value)}
                                        aria-label="Small select example">
                                    <option selected>Select Role</option>
                                    <option value="admin">admin</option>
                                    <option value="employee">employee</option>
                                </select>
                            </div>
                            <div className="mt-1">
                                <label htmlFor="">Phone Number</label>
                                <input
                                    type="text"
                                    className="form-control input-stock"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="mt-1">
                                <label htmlFor="">Password</label>
                                <input
                                    type="text"
                                    className="form-control input-stock"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <button type="button" onClick={PostEmployee} className="mt-5 input-stock-btn">
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
