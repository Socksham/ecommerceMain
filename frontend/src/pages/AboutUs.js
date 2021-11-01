import React from 'react'
import Navbar from "../components/Navbar"


const AboutUs = ({history}) => {
    return (
        <div className="h-screen bg-glass min-h-screen">
            <Navbar history={history}/>
            <div className="mt-20 pb-10 flex items-center flex-col space-y-4 ml-72 mr-72 bg-white rounded-xl shadow-md p-8">
                <p className="text-3xl">About us</p>
                <div className="text-xl">
                    <p>Stockoli is grocery shopping reimagined. 
                        We strive to provide our customers with a simple shopping experience filled with any type of produce they can think of. 
                        Our authorized ditributors work hand in hand with your Stockoli shopper to bring you products you'd pick yourself. 
                        All this in a matter of hours since you pay and with our dual payment of system of Bitcoin and Stripe we enable users to keep themselves entirely anonymous if they so choose. 
                        Stockoli is revolutionizing the way shopping is done and continues to innovate on its practices and products to keep the user, you, satisfied.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
