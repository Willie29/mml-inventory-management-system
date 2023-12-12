"use client";
import Layouts from "../../../../components/layouts";
import {useEffect, useState} from "react";
import {useParams, useRouter} from "next/navigation";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../../stores/reducer";
import {Messaege} from '../../../../helper/Message'
import {products} from '../../../../stores/thunk'

const Page = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const params = useParams()

    const getProductById = async () => {
        try {
            const resultProduct = await dispatch(products.getProducyById(params.id))
            console.log(resultProduct.payload.data.data)
            setData(resultProduct.payload.data.data)
        } catch (e) {
            Messaege('Error', e.payload.response.message, 'error')
        }
    }

    useEffect(() => {
        getProductById()
    }, []);

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            // Call the function to perform the search here
            getStocks();
        }
    };
    return (
        <Layouts>
            <div className="container">
                <div>
                    <h1>{data?.name}</h1>
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

              >
                <option value="Mitra Utama">Mitra Utama</option>
                <option value="Vacum Central">Vacum Central</option>
                <option value="Pima Utama">Pima Utama</option>
                <option value="Park Center">Park Center</option>
              </select>
            </span>

                        <button type="button" className="mt-5 input-stock-btn">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </Layouts>
    );
};

export default Page;
