import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar"
import AccountDetails from "../components/account/AccountDetails"
import AccountOrders from '../components/account/AccountOrders'
import { auth } from '../config/Firebase'
import axios from 'axios'

const Account = ({history}) => {

    const [address, setAddress] = useState("")
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [email, setEmail] = useState("")

    const getUser = (id) => {
        return axios.get(`http://localhost:5000/users/${id}`)
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user){
                console.log("YESSS")
                const uid = user.uid
                setEmail(user.email)
                //TODO: GET USER DATA FROM MONGO AND SET IT HERE **MAKE SURE TO USE UID VARIABLE
            }else{
                console.log("NOOOOO")
                history.push("/login")
            }
        })
    })
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
        <div className="w-screen h-full bg-glass min-h-screen"> 
            <div className="bg-clip-padding backdrop-blur-xl backdrop-filter bg-gray-100 bg-opacity-30 h-full">
                <Navbar history={history} />
                <div className="ml-20 pt-8 mr-20 flex justify-between pb-10">
                    <AccountDetails history={history} emailIn={email} firstIn={first} lastIn={last} addressIn={address}/>
                    <AccountOrders />
                </div>
            </div>

        </div>
    )
}

export default Account
