import React from 'react'

const AccountOrderItem = ({ amount, price, name, imgUrl }) => {

    return (
        <div>
            <div className="flex mt-4 space-x-4">
                <div className="w-20 bg-gray-200 flex items-center rounded">
                    <img
                        src="https://purepng.com/public/uploads/large/purepng.com-flourflourgrainscerealbread-1411527418592jo6pj.png
                "
                    />
                </div>
                <div className="">
                    <p className="font-bold text-lg">Flour</p>
                    <div className="flex space-x-2">
                        <p>Amount: </p>
                        <input type="text" disabled className="text-center w-6 bg-gray-200 rounded outline-none" value={amount} />
                        <p>g</p>
                    </div>
                    <p>Price: $60</p>
                </div>

            </div>

        </div>

    )
}

export default AccountOrderItem
