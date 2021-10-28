import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountOrder from './AccountOrder';


const AccountDetails = () => {

    const [address, setAddress] = useState("865 Eaton Ct.")
    const [first, setFirst] = useState("John")
    const [last, setLast] = useState("Doe")
    const [email, setEmail] = useState("johndoe@gmail.com")

    return (
        <div className="flex w-full justify-between">
            <div className="flex">
                <div className="">
                    <div className="bg-white p-6 bg-opacity-70 rounded-xl">
                        <div className="flex justify-between">
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
                            <div>
                                <div className="w-24 h-12 bg-black mt-8 rounded relative flex cursor-pointer">
                                    <p className="m-auto text-white">Logout</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 space-y-3">
                            <div className="flex space-x-3">
                                <div>
                                    <p>First Name</p>
                                    <input type="text" className="w-64 h-10 rounded bg-white pl-2 text-lg" value={first} onChange={(e) => { setFirst(e.target.value) }} />
                                </div>
                                <div>
                                    <p>Last Name</p>
                                    <input type="text" className="w-64 h-10 rounded bg-white pl-2 text-lg" value={last} onChange={(e) => { setLast(e.target.value) }} />
                                </div>

                            </div>
                            <div>
                                <div>
                                    <p>Email</p>
                                    <input type="text" className="w-full h-10 rounded bg-white pl-2 text-lg" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                <div>
                                    <p>Address</p>
                                    <input type="text" className="w-96 h-10 rounded bg-white pl-2 text-lg" value={address} onChange={(e) => { setAddress(e.target.value) }} />
                                </div>
                                <div>
                                    <p>Apt. Suite</p>
                                    <input type="text" className="w-32 h-10 rounded bg-white pl-2 text-lg" />
                                </div>
                            </div>

                        </div>
                        <div className="">
                            <div className="w-24 h-12 mt-8 bg-black rounded relative flex cursor-pointer">
                                <p className="m-auto text-white">Save</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AccountDetails
