import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from "../components/Navbar"
import GridItem from '../components/items/GridItem'
import axios from 'axios'

const ItemsShowcase = ({ history }) => {
    const location = useLocation();
    const [word, setWord] = useState("")
    const [searchItems, setSearchItems] = useState([])

    const getSearchResponse = (query) => {
        return axios.get(`http://localhost:5000/items/search/${query}`)
    }


    function refreshSearchItems(items) {
        let itemList = [];
        items.forEach((item,index)=>{
            itemList.push( <li key={index}>{item}</li>)
        })
        return itemList;
    }

    useEffect(() => {
        var inputs = location.pathname.split("/");
        setWord(inputs[2])
        getSearchResponse(inputs[2])
            .then(response => {
                if(response.data.length > 0) {
                    setSearchItems(response.data[0])
                    let items = [];
                    response.data.forEach(element => {
                        items.push(element._id)
                    });
                    refreshSearchItems(items);
                }
            })
            .catch((error) => {
                console.log(error);
            })
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
