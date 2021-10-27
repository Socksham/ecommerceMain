import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BitcoinButton } from '../BitcoinButton';

const UserInfo = () => {
    const [clicked, setClicked] = useState(false)
    return (
        <div className="bg-white p-8 bg-opacity-70 rounded-xl">
            <div className="">
                <div className="flex space-x-4">
                    <div>
                        <p>First Name*</p>
                        <input type="text" className="bg-white w-72 h-10 rounded outline-none pl-3 pr-3" />
                    </div>
                    <div>
                        <p>Last Name*</p>
                        <input type="text" className="bg-white w-72 h-10 rounded outline-none pl-3 pr-3" />

                    </div>
                </div>
                <div className="mt-4 flex space-x-4">
                    <div>
                        <p>Address*</p>
                        <input type="text" className="bg-white w-96 h-10 rounded outline-none pl-3 pr-3" />
                    </div>
                    <div>
                        <p>Apt. Suite</p>
                        <input type="text" className="bg-white w-48 h-10 rounded outline-none pl-3 pr-3" />
                    </div>

                </div>
                <div className="flex space-x-4 mt-4">
                    <div>
                        <p>City*</p>
                        <input type="text" className="bg-white w-72 h-10 rounded outline-none pl-3 pr-3" />
                    </div>
                    <div>
                        <p>Country*</p>
                        <input type="text" className="bg-white w-72 h-10 rounded outline-none pl-3 pr-3" />

                    </div>
                </div>
                <div className="flex space-x-4 mt-4">
                    <div>
                        <p>Postal Code*</p>
                        <input type="text" className="bg-white w-72 h-10 rounded outline-none pl-3 pr-3" />
                    </div>
                </div>
                <div className="w-48 h-12 bg-black mt-8 rounded relative flex cursor-pointer">
                    <p className="m-auto text-white">Save and Deliver</p>
                </div>
            </div>
            {
                clicked ?
                    <div className="w-full mt-8 bg-white p-2 rounded-md flex items-center pl-4 cursor-pointer pr-4 h-24" onClick={() => {setClicked(false)}}>
                        <div className="w-full">
                            <p>Payment method</p>
                            <BitcoinButton />
                        </div>
                    </div>
                    :
                    <div className="w-full mt-8 bg-white h-12 rounded-md flex items-center pl-4 cursor-pointer pr-4" onClick={() => {setClicked(true)}}>
                        <div className="flex justify-between w-full">
                            <p>Payment method</p>
                            <ExpandMoreIcon size="large" />
                        </div>
                    </div>
            }


        </div>
    )
}

export default UserInfo
