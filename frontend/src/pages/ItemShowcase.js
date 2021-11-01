import React, {useEffect, useState } from 'react'
import Review from '../components/item/Review'
import Navbar from '../components/Navbar'
import { auth } from '../config/Firebase'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorder from '@mui/icons-material/StarBorder';

const ItemShowcase = ({history}) => {
    const location = useLocation();
    const [itemInfo, setItemInfo] = useState([]);
    const [reviewInfo, setReviewInfo] = useState([]);
    
    const getItem = (query) => {
        return axios.get(`http://localhost:5000/items/${query}`)
    }

    const getReviews = (query) => {
        return axios.get(`http://localhost:5000/reviews/for/${query}`)
    }

    const show = function showStars(intRating) {
        var returnOutput = [];
        var numStars = 0;
        while (intRating > 0) {
            if(intRating - 10 >= 0) {
                returnOutput.push(<StarIcon fontSize="large" />);
                intRating -= 10;
                numStars++;
            } else {
                returnOutput.push(<StarHalfIcon fontSize="large"/>);
                intRating -= 5;
                numStars++;
            }
        }
        while(numStars < 3) {
            returnOutput.push(<StarBorder fontSize="large"/>);
            numStars++;
        }
        return returnOutput;
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user){
                console.log("YESSS")
            }else{
                console.log("NOOOOO")
                history.push("/login")
            }
        })

        var inputs = location.pathname.split("/");
        console.log(inputs[2])
        getItem(inputs[2])
            .then(response => {
                setItemInfo(response.data);
            })
            .catch((error) => {
                console.log(error)
            })

        getReviews(inputs[2])
            .then(response => {
                setReviewInfo(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className="w-screen h-full bg-glass min-h-screen">
            <div className="bg-clip-padding backdrop-blur-xl backdrop-filter bg-gray-100 bg-opacity-30 h-full">
                <Navbar history={history}/>

                <div className="grid grid-cols-2 ml-20 mr-20 mt-8 gap-6 bg-white rounded-3xl bg-opacity-70 shadow-lg">
                    <div className="ml-10">
                        <img
                            className="cursor-pointer"
                            src={itemInfo.image}
                        />
                    </div>
                    <div className="ml-10 mr-10 mt-10">
                        <div className="flex justify-between ">
                            <p className="text-3xl">Chinese Broccoli</p>
                            <div className="flex">
                                {show(itemInfo.rating)}
                            </div>

                        </div>
                        <div className="mt-1">
                            <p className="text-xl">$13.99</p>
                        </div>
                        <div className="mt-10">
                            <p>{itemInfo.description}</p>
                        </div>
                        <div className="flex flex-row-reverse mt-20">
                            <div className="bg-black p-4 rounded-md cursor-pointer" onClick={() => { }}>
                                <p className="text-white text-md">Add to Cart</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="flex flex-col items-center mt-10 pb-10">
                        <p className="text-3xl">Reviews</p>
                    </div>
                    <div className="space-y-6 pb-6">
                    {
                        reviewInfo.map((data,id)=>{
                            console.log(data)
                            return (
                                <Review username={data.user}
                                        reviewText={data.text}
                                        rating={data.rating}/>
                            );
                        })
                    }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ItemShowcase
