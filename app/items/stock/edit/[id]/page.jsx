"use client";
import Layouts from "../../../../components/layouts";
import {useEffect, useState} from "react";
import {useParams, useRouter} from "next/navigation";
import {useDispatch} from "react-redux";
import {Messaege} from '../../../../helper/Message'
import {locations, products} from '../../../../stores/thunk'

const Page = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const params = useParams()

    const [data, setData] = useState([]);
    const [locationData, setLocationData] = useState([]);

    const getProductById = async () => {
        try {
            const resultProduct = await dispatch(products.getProducyById(params.id))
            console.log(resultProduct.payload)

            if (resultProduct.payload?.data) {
                setData(resultProduct.payload.data.data)
            }
        } catch (e) {
            Messaege('Error', e.message, 'error')
        }
    }

    const getAllLocation = async () => {
        try {
            const resultProduct = await dispatch(locations.getAllLocations())
            if (resultProduct.payload?.data) {
                setLocationData(resultProduct.payload.data.data)
            }
        } catch (e) {
            Messaege('Error', e.message, 'error')
        }
    }

    useEffect(() => {
        getProductById()
        getAllLocation()
    }, []);

    return (<Layouts>
        <div className="container">
            <div>
                <h1>{data?.name}</h1>
                <div className="card">
                    <h2 className="mt-5 text-center">Edit Stock</h2>


                    <table>
                        <thead>
                        <tr>
                            <th>Location</th>
                            <th>Qty</th>
                            <th>Uom</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td width={150}>{data?.Location?.name}</td>
                            <td width={150}>
                                <input
                                    type="number"
                                    placeholder={'Masukan jumlah stock'}
                                    style={{
                                        outline: "none",
                                        border: "none",
                                        backgroundColor: "transparent",
                                        outlineColor: 'transparent',
                                        borderColor: 'transparent',
                                    }}
                                />
                            </td>
                            <td width={150}>pcs</td>
                        </tr>
                        </tbody>
                    </table>

                    <div>
                        <label htmlFor="" className="mr-3" style={{display: "block"}}>
                            Location
                        </label>
                        <select
                            name="show"
                            id=""
                            className="mr-3"
                            style={{width: "200px", padding: "5px"}}
                        >
                            {locationData.map((item, index) => (
                                <option value="Mitra Utama" key={item.id}>{item.name}</option>))}
                        </select>
                    </div>

                    <button type="button" className="mt-5 input-stock-btn">
                        Update
                    </button>
                </div>
            </div>
        </div>
    </Layouts>);
};

export default Page;
