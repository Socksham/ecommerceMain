import React, { useState, useEffect } from 'react'
import CartItems from '../components/cart/CartItems'
import UserInfo from '../components/cart/UserInfo'
import Navbar from "../components/Navbar"
import { auth } from '../config/Firebase'



import { useLocation } from 'react-router-dom'
import axios from 'axios'

const Cart = ({ history }) => {

    const location = useLocation();
    const [image, setImage] = useState("");
    const [userId, setUserId] = useState("");

    const getUser = (userId) => {
        return axios.get(`http://localhost:5000/users/${userId}`);
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                console.log("YESSS")
                var inputs = location.pathname.split("/");
                console.log(inputs)
                setUserId(inputs[2])
                getUser(user.uid)
                    .then(response => {
                        console.log(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            } else {
                console.log("NOOOOO")
                history.push("/login")
            }
        })


    }, []);

    return (
        <div className="w-screen h-full bg-glass min-h-screen">
            <div className="bg-clip-padding backdrop-blur-xl backdrop-filter bg-gray-100 bg-opacity-30 h-full">
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
