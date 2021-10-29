import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const AddReview = ({history}) => {

    const location = useLocation();
    const [itemId, setItemId] = useState("")  
    const [userId, setUserId] = useState("")
    const [userData, setUserData] = useState([])
    const getUser = (path, id) => {
        console.log(path + " " + id)
        return axios.get(`http://localhost:5000/${path}/${id}`)
    }

    useEffect(() => {
        var inputs = location.pathname.split("/")
        setItemId(inputs[2])
        setUserId(inputs[3])
        getUser('users', userId)
          .then(response => {
            if (response.data.length > 0) {
                setUserData(response.data[0])
            }
          })
          .catch((error) => {
            console.log(error);
          })
          console.log(userData)
    }, [])

    return (
        <div style={{ backgroundImage: "url(\"https://image.freepik.com/free-vector/hand-drawn-minimal-background_23-2149017007.jpg" }} className="w-screen h-full bg-cover border-1 rounded-md bg-no-repeat">
            <div className="bg-clip-padding backdrop-blur-xl backdrop-filter bg-gray-100 bg-opacity-30 h-screen">
                <Navbar history={history} />
                <div className="ml-20 pt-8 mr-20">
                    <div className="bg-white bg-opacity-60 p-10 rounded-xl">
                        <p>User: {userData.username}</p>
                        <p>Item: {itemId}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddReview;