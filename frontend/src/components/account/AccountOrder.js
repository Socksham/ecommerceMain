import React from 'react'
import AccountOrderItem from './AccountOrderItem'

const AccountOrder = ({ status }) => {
    return (
        <div>
            <div className="w-full h-px bg-gray-300 mt-4 mb-4"></div>
            <div className="flex space-x-1 text-xl">
                <p>Order</p>
                <p>#12345678</p>
            </div>
            <div>
                <AccountOrderItem amount={1} />
                <AccountOrderItem amount={1} />
                <AccountOrderItem amount={1} />
            </div>

            <div className="flex mt-4">
                <div className="pl-2 pr-2 pt-1 pb-1 border-2 border-green-400 rounded-xl bg-green-200">
                    <p>Shipping</p>
                </div>
            </div>
        </div>
    )
}

export default AccountOrder
