import React from 'react'
import Navbar from "../components/Navbar"

function Home({ history }) {
    return (
        <div className="bg-glass h-screen min-h-screen">
            <Navbar history={history} />
            <div className="flex flex-row-reverse ml-20 mr-20">
                <div className="w-1/2">
                    <img src="https://pngimg.com/uploads/broccoli/broccoli_PNG72970.png" />
                </div>
                <div className="flex items-center w-1/2">
                    <div className="space-y-2">
                        <p className="text-6xl">STOCKOLI</p>
                        <div>
                        <p className="text-2xl">Bringing fresh product to your doorstep</p>
                        <p className="text-2xl">in a matter of hours</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
