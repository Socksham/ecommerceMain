import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import StarRating from '../components/StarRating'

const AddReview = ({history}) => {

    const location = useLocation();
    const [itemId, setItemId] = useState("")  
    const [userId, setUserId] = useState("")
    const [userData, setUserData] = useState([])
    const [reviewText, setReviewText] = useState("")
    
    const getUser = (id) => {
        return axios.get(`http://localhost:5000/users/${id}`)
    }

    const getItem = (id) => {
        return axios.get(`http://localhost:5000/items/${id}`)
    }

    function handleSubmit(e) {
        console.log(reviewText);
        e.preventDefault();
        const body = {
            "user": userId,
            "item": itemId,
            "text": reviewText,
            "rating": "50",
            "score": "0"
        };
        console.log(body);

        axios.post('http://localhost:5000/reviews/add', body)
            .then(res => console.log(res));
        // history.push(`/item/${itemId}`)
    }

    useEffect(() => {
        var inputs = location.pathname.split("/")
        setItemId(inputs[2])
        setUserId(inputs[3])
        getUser(userId)
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
                        <StarRating />
                        <br></br>
                        <div className="w-full">
                            <form className="w-full" onSubmit={handleSubmit}>
                                <textarea className="w-full p-4" 
                                          placeholder={"Add your review here!"} 
                                          rows={15} 
                                          onChange={(e) => {
                                              setReviewText(e.target.value)
                                          }}/>
                                <label>
                                    <input type="submit" name="Submit" />
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddReview;