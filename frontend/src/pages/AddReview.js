import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import StarRating from '../components/StarRating'
import { auth } from '../config/Firebase'
import { UpdateDisabledRounded } from '@mui/icons-material'

const AddReview = ({ history }) => {

    const location = useLocation();
    const [itemId, setItemId] = useState("");
    const [userId, setUserId] = useState("");
    const [userData, setUserData] = useState([]);
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(30);

    const getUser = (id) => {
        return axios.get(`http://localhost:5000/users/${id}`)
    }

    const getItem = (id) => {
        return axios.get(`http://localhost:5000/items/${id}`)
    }

    const getRating = (rating) => {
        setRating(rating);
    }

    function handleSubmit(e) {
        console.log(reviewText);
        e.preventDefault();
        const body = {
            "user": userId,
            "item": itemId,
            "text": reviewText,
            "rating": rating.toString(),
            "score": "0"
        };
        console.log(body);

        axios.post('http://localhost:5000/reviews/add', body)
            .then(res => console.log(res));
        history.push(`/item/${itemId}`)
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                console.log("YESSS")
                const uid = user.uid
                var inputs = location.pathname.split("/")
                setItemId(inputs[2])
                getUser(uid)
                    .then(response => {
                        if (response.data.length > 0) {
                            setUserData(response.data[0])
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            } else {
                console.log("NOOOOO")
                history.push("/login")
            }
        })

    }, [])

    return (
        <div className="w-screen h-full bg-glass min-h-screen">
            <div className="bg-clip-padding backdrop-blur-xl backdrop-filter bg-gray-100 bg-opacity-30 h-screen">
                <Navbar history={history} />
                <div className="ml-20 pt-8 mr-20">
                    <div className="bg-white bg-opacity-60 p-10 rounded-xl">
                        <p>User: {userData.username}</p>
                        <StarRating sendData={getRating} />
                        <br></br>
                        <div className="w-full">
                            <form className="w-full" onSubmit={handleSubmit}>
                                <textarea className="w-full p-4"
                                    placeholder={"Add your review here!"}
                                    rows={15}
                                    onChange={(e) => {
                                        setReviewText(e.target.value)
                                    }} />
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