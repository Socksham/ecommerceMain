import React, { useState, useEffect } from 'react'
import CartItems from '../components/cart/CartItems'
import UserInfo from '../components/cart/UserInfo'
import Navbar from "../components/Navbar"
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const Cart = ({ history }) => {

    const location = useLocation();
    const[image, setImage] = useState("");
    const [userId, setUserId] = useState("");

    const getUser = (userId) => {
        return axios.get(`http://localhost:5000/users/${userId}`);
    }

    useEffect(() => {
        var inputs = location.pathname.split("/");
        console.log(inputs)
        setUserId(inputs[2])
        getUser(userId)
            .then(response => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div style={{ backgroundImage: "url(\"https://image.freepik.com/free-vector/hand-drawn-minimal-background_23-2149017007.jpg" }} className="w-screen h-full bg-cover border-1 rounded-md bg-no-repeat"> 
            <div className="bg-clip-padding backdrop-blur-xl backdrop-filter bg-gray-100 bg-opacity-30 h-screen">
                <Navbar history={history} />
                <div className="ml-20 pt-8 pb-8 mr-20 flex justify-between">
                    <UserInfo />
                    <CartItems />
                </div>
            </div>

        </div>
    )
}

export default Cart
