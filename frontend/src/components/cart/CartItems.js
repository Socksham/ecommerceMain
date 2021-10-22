import React from 'react'
import CartItem from './CartItem'

const CartItems = () => {
    return (
        <div className="w-96 bg-gray-100 h-screen p-10 rounded-xl">
            <p>Your Order</p>
            <div className="w-58 h-px bg-gray-200 mt-4"></div>
            <div className="space-y-4 mt-4">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        </div>
    )
}

export default CartItems
