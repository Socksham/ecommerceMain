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

    const searchItemsElements = searchItems.map((data, id) => {
        console.log(data);
        return <GridItem history={history} 
                         name={data.name} 
                         spud={data._id}
                         price={data.price}
                         rating={data.rating}
                         image={data.image}/>
    });

    useEffect(() => {
        var inputs = location.pathname.split("/");
        setWord(inputs[2])
        getSearchResponse(inputs[2])
            .then(response => {
                console.log(response);
                if(response.data.length > 0) {
                    let items = [];
                    response.data.forEach(element => {
                        items.push(element)
                    });
                    console.log(items);
                    setSearchItems(items);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    useEffect(() => {
        
    })

    return (
        <div className="w-screen h-full bg-blue-100">
            <div className="bg-clip-padding backdrop-blur-xl backdrop-filter bg-gray-100 bg-opacity-30 h-full pb-10">
                <Navbar history={history} />
                <div className="grid grid-cols-4 gap-8 ml-20 mr-20 pt-8">
                    {searchItemsElements}
                </div>
            </div>
        </div>
    )
}

export default ItemsShowcase
