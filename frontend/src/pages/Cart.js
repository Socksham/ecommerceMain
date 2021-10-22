import React, {useState} from 'react'
import CartItems from '../components/cart/CartItems'
import UserInfo from '../components/cart/UserInfo'
import Navbar from "../components/Navbar"

const Cart = ({ history }) => {

    return (
        <div className="">
            <Navbar history={history} />
            <div className="ml-20 mt-8 mr-20 flex justify-between">
                <UserInfo />
                <CartItems />
            </div>
        </div>
    )
}

export default Cart
