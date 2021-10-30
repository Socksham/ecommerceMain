import React from 'react'
import CartItem from './CartItem'

const CartItems = () => {
    return (
        <div className="w-96">
            <div className="bg-white bg-opacity-60 p-10 rounded-xl shadow-lg">
                <p>Your Order</p>
                <div className="w-58 h-px bg-gray-200 mt-4"></div>
                <div className="space-y-4 mt-4">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
            </div>

        </div>
    )
}

export default CartItems
