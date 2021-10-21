import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
    return (
        <div className="flex w-screen justify-between items-center pl-20 pr-20 mt-6">
            <p className="text-xl font-semibold cursor-pointer">STOCKOLI</p>
            <input type="text" className="bg-gray-200 rounded w-96 h-10 outline-none pl-4 pr-4 text-lg"/>
            <div className="flex space-x-20 items-center">
                <p className="cursor-pointer">ABOUT US</p>
                <ShoppingCartIcon fontSize="large" className="cursor-pointer"/>
                <AccountCircleIcon fontSize="large" className="cursor-pointer"/>
            </div>
            
        </div>
    )
}

export default Navbar
