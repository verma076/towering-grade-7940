import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import "./payment.css"

function Payment() {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("")
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("");
    const handlePayment = () => {
        if (!name) {
            return alert("Name is required")
        } else {
            localStorage.setItem("name", name)
        }
        if (!mobile) {
            return alert("Mobile Number is required")
        } else {
            localStorage.setItem("mobile", mobile)
        } if (!address) {
            return alert("Address is required")
        } else {
            localStorage.setItem("address", address)
        }

        alert("Order Placed successfully");
        navigate("/")
        setAddress("")
        setMobile("")
        setName("")



    }


    return (
        <div>
          
            <div className='contains'>
                <div className='formDiv'>
                    <label htmlFor='name'>Name</label>
                    <input type="text" onChange={e => setName(e.target.value)} value={name}></input><br></br>
                    <label htmlFor='name'>Mobile No. </label>
                    <input type="number" onChange={e => setMobile(e.target.value)} value={mobile}></input><br></br>
                    <label htmlFor='name'>Address</label>
                    <input type="text" onChange={e => setAddress(e.target.value)} value={address}></input><br></br>
                    <label htmlFor='name'>Pincode</label>
                    <input type="number" onChange={e => setPincode(e.target.value)} value={pincode}></input><br></br>
                    <label htmlFor='name'>Payment Method</label>
                    <select className='select'>
                        <option>Cash on Delivery</option>
                        <option>Paytm</option>
                        <option>Credit Card</option>
                        <option>Debit Card</option>
                    </select>
                    <button onClick={handlePayment}> Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default Payment