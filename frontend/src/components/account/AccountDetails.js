import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountOrder from './AccountOrder';


const AccountDetails = () => {
    return (
        <div className="">
            <div className="flex items-center space-x-2">
                <div className="text-8xl">
                    <AccountCircleIcon fontSize="inherit" />
                </div>
                <div>
                    <div className="flex text-xl space-x-2">
                        <p>John</p>
                        <p>Doe</p>
                    </div>
                    <div>
                        <p>johndoe@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 bg-white w-full rounded-lg">
                <p className="text-3xl font-semibold">Orders</p>
                <AccountOrder />
            </div>
        </div>
    )
}

export default AccountDetails
