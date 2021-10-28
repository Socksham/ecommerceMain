import React from 'react'
import AccountOrder from './AccountOrder'

const AccountOrders = () => {
    return (
        <div className="bg-white bg-opacity-60 w-7/12 rounded-lg p-10">
            <p className="text-3xl font-semibold">Orders</p>
            <AccountOrder />
            <AccountOrder />
            <AccountOrder />
        </div>
    )
}

export default AccountOrders
