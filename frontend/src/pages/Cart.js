import React, { useState, useEffect } from 'react'
import CartItems from '../components/cart/CartItems'
import UserInfo from '../components/cart/UserInfo'
import Navbar from "../components/Navbar"
import { auth } from '../config/Firebase'

const Cart = ({ history }) => {

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user){
                console.log("YESSS")
            }else{
                console.log("NOOOOO")
                history.push("/login")
            }
        })
    })

    return (
        <div className="w-screen h-full bg-glass"> 
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
