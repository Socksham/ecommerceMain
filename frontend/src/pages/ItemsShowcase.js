import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from "../components/Navbar"

const ItemsShowcase = ({ history }) => {
    const location = useLocation();
    const [word, setWord] = useState("")

    useEffect(() => {
        setWord(location.pathname.split("/")[2])
    }, [])

    return (
        <div style={{ backgroundImage: "url(\"https://image.freepik.com/free-vector/hand-drawn-minimal-background_23-2149017007.jpg" }} className="w-screen h-full bg-cover border-1 rounded-md bg-no-repeat">
            <div className="bg-clip-padding backdrop-blur-xl backdrop-filter bg-gray-100 bg-opacity-30 h-screen">
                <Navbar history={history} />
                <div className="ml-20 pt-8 mr-20 flex justify-between">
                    <div className="grid grid-cols-4">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemsShowcase
