import React from 'react'
import Navbar from "../components/Navbar"
import AccountDetails from "../components/account/AccountDetails"
import AccountOrders from '../components/account/AccountOrders'

const Account = ({history}) => {
    return (
        // <div style={{ backgroundImage: "url(\"https://image.freepik.com/free-vector/hand-drawn-minimal-background_23-2149017007.jpg" }} className="w-screen h-full bg-cover border-1 rounded-md bg-repeat-y bg-center"> 
        //     <div className="bg-clip-padding backdrop-blur-xl backdrop-filter bg-gray-100 bg-opacity-30">
        //         <Navbar history={history} />
        //         <div className="ml-20 pt-8 mr-20 flex justify-between pb-10">
        //             <AccountDetails />
        //             <AccountOrders />
        //         </div>
        //     </div>

        // </div>
        <div style={{ backgroundImage: "url(\"https://image.freepik.com/free-vector/hand-drawn-minimal-background_23-2149017007.jpg" }} className="w-screen h-full bg-cover border-1 rounded-md bg-repeat-y bg-center"> 
            <div className="bg-clip-padding backdrop-blur-xl backdrop-filter bg-gray-100 bg-opacity-30 h-full">
                <Navbar history={history} />
                <div className="ml-20 pt-8 mr-20 flex justify-between pb-10">
                    <AccountDetails />
                    <AccountOrders />
                </div>
            </div>

        </div>
    )
}

export default Account
