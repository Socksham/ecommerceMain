import React from 'react'
import Navbar from "../components/Navbar"

const Cart = ({ history }) => {
    return (
        <div>
            <Navbar history={history} />
            <div className="pl-20">
                <div className="flex space-x-28">
                    <div>
                        <p>First Name</p>
                        <input type="text" className="bg-black w-72 h-10 rounded"/>
                    </div>
                    <div>
                        <p>Last Name</p>
                        <input type="text" className="bg-black w-72 h-10 rounded"/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
