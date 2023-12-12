"use client";
import Layouts from "../../../components/layouts";
import {useRouter} from "next/navigation";
import {getAllStocks, updateStock} from "../../../api";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../../stores/action/addCart";

const Page = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const cartRedux = useSelector((state) => state.addCart.cart);
    console.log(cartRedux, "test");
    const [qty, setQty] = useState(0);
    const [selectedOption, setSelectedOption] = useState("Mitra Utama");
    const [data, setData] = useState([]);

    const handleSelectChange = (event) => {
        // Get the selected value from the event
        const selectedValue = event.target.value;

        // Update the state with the selected value
        setSelectedOption(selectedValue);

        // You can perform any additional actions based on the selected value here
        console.log("Selected option:", selectedValue);
    };

    const addTocart = async () => {
        dispatch(
            addToCart({
                ...cartRedux,
                qty: qty,
                location: selectedOption,
            })
        );
        router.push("/items/orders/confirm-order");
    };

    function getStocks() {
        getAllStocks().then((res) => {
            let tempList = [];
            tempList = [...new Set(res?.data?.data)];
            console.log("List Data => ", tempList);

            const unique = [];
            for (const item of tempList) {
                const duplicate = unique.find(
                    (obj) => obj.location === item.location
                );
                if (!duplicate) {
                    unique.push(item);
                }
            }
            setData(unique);
        });
    }

    useEffect(() => {
        getStocks();
    }, []);
    return (
        <Layouts>
            <div className="container">
                <div>
                    {/* <h1>Order Item</h1> */}
                    <div className="card">
                        <h2 className="mt-5 text-center">Order Item</h2>

                        <input
                            type="number"
                            placeholder="Enter Product Quantity"
                            onChange={(e) => setQty(e.target.value)}
                            className="input-stock"
                        />
                        <span>
              <label htmlFor="" className="mr-3" style={{display: "block"}}>
                Location
              </label>
              <select
                  name="show"
                  id=""
                  className="mr-3"
                  style={{width: "200px", padding: "5px"}}
                  onChange={handleSelectChange}
                  value={selectedOption}
              >
                {data?.map((item) => (
                    <option value={item.location} key={item.id}>{item.location}</option>
                ))}
              </select>
            </span>
                        <div style={{display: "flex", gap: "20px"}}>
                            <button
                                type="button"
                                onClick={addTocart}
                                className="mt-5 input-stock-btn"
                            >
                                Add to cart
                            </button>
                            <button
                                type="button"
                                onClick={addTocart}
                                className="mt-5 input-stock-btn"
                            >
                                Order now
                            </button>
                        </div>

                        <table className="mt-4">
                            <thead>
                            <tr>
                                <th>Name of Product</th>
                                <th>Category</th>
                                <th>QTY</th>
                                <th>UOM</th>
                                <th>Location</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{cartRedux.name}</td>
                                <td>{cartRedux.category}</td>
                                <td>{cartRedux.qty}</td>
                                <td>{cartRedux.uom}</td>
                                <td>{cartRedux.location}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layouts>
    );
};

export default Page;
