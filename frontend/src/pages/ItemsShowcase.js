import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from "../components/Navbar"
import GridItem from '../components/items/GridItem'

const ItemsShowcase = ({ history }) => {
    const location = useLocation();
    const [word, setWord] = useState("")

    useEffect(() => {
        setWord(location.pathname.split("/")[2])
    }, [])

    return (
        <div className="w-screen h-full bg-blue-100">
            <div className="bg-clip-padding backdrop-blur-xl backdrop-filter bg-gray-100 bg-opacity-30 h-full pb-10">
                <Navbar history={history} />
                <div className="grid grid-cols-4 gap-8 ml-20 mr-20 pt-8">
                        <GridItem history={history} name="Chinese Broccoli" spud="chinese-broccoli"/>
                        <GridItem history={history} name="Chinese Broccoli" spud="chinese-broccoli"/>
                        <GridItem history={history} name="Chinese Broccoli" spud="chinese-broccoli"/>
                        <GridItem history={history} name="Chinese Broccoli" spud="chinese-broccoli"/>
                        <GridItem history={history} name="Chinese Broccoli" spud="chinese-broccoli"/>
                        <GridItem history={history} name="Chinese Broccoli" spud="chinese-broccoli"/>
                        <GridItem history={history} name="Chinese Broccoli" spud="chinese-broccoli"/>
                </div>
            </div>
        </div>
    )
}

export default ItemsShowcase
