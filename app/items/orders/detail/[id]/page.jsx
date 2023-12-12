"use client";
import {Messaege} from "../../../../helper/Message";
import {postOrder} from "../../../../api";
import {useEffect, useState} from "react";
import {useParams, useRouter, useSearchParams} from "next/navigation";
import {useSelector} from "react-redux";
import Layouts from "../../../../components/layouts";
import axios from "axios";
import CONFIG from "../../../../config";
import moment from "moment";

const DetailOrder = () => {
    const router = useRouter();
    const cartRedux = useSelector((state) => state.addCart.cart);
    const searchParams = useParams()

    const [machine, setMachine] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [selectedOption2, setSelectedOption2] = useState("");
    const [name, setName] = useState("");

    const [ordersItems, setOrdersItems] = useState([])


    useEffect(() => {
        (async () => {
            try {
                const api = await axios.get(`${CONFIG.API_URL}/orders/orderemployee/${searchParams.id}`)
                setOrdersItems(api.data.data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [searchParams.id]);

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };
    const handleOptionChange2 = (value) => {
        setSelectedOption2(value);
    };

    const handleSUbmit = async (e) => {
        try {
            e.preventDefault();
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
                                    {ordersItems?.[0]?.employee}
                                </td>
                            </tr>
                            <tr className="mt-5">
                                <td>Activity</td>
                                <td>:</td>
                                <td>
                                    {ordersItems?.[0]?.activity}
                                </td>
                            </tr>
                            <tr className="mt-5">
                                <td>Division</td>
                                <td>:</td>
                                <td>
                                    {ordersItems?.[0]?.division}
                                </td>
                            </tr>
                            <tr className="mt-5">
                                <td>Machine</td>
                                <td>:</td>
                                <td>
                                    {ordersItems?.[0]?.machine}
                                </td>
                            </tr>
                        </table>

                        <table className="mt-5">
                            <thead>
                            <tr>
                                <th>Category</th>
                                <th>QTY</th>
                                <th>UOM</th>
                                <th>Requested Dates</th>
                                <th>Location</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {ordersItems?.map((item => (
                                <tr key={item.id}>
                                    <td>Pipa</td>
                                    <td>100</td>
                                    <td>Pcs</td>
                                    <td>{moment(item.requestDate).format('YYYY-MM-DD')}</td>
                                    <td>{item.location}</td>
                                    <td>
                                        <span
                                            className={`badge ${item.status === 'pending' ? 'badge-error text-white' : 'badge-success'}`}
                                            style={{padding: "5px"}}
                                        >
                                          {item.status}
                                        </span>
                                    </td>
                                </tr>
                            )))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layouts>
    );
};

export default DetailOrder;
