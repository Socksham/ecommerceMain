import React from 'react'
import { Avatar } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorder from '@mui/icons-material/StarBorder';

const Review = ({username, reviewText, rating}) => {
    console.log(username);
    const show = function showStars(intRating) {
        var returnOutput = [];
        var numStars = 0;
        while (intRating > 0) {
            if(intRating - 10 >= 0) {
                returnOutput.push(<StarIcon fontSize="medium" />);
                intRating -= 10;
                numStars++;
            } else {
                returnOutput.push(<StarHalfIcon fontSize="medium"/>);
                intRating -= 5;
                numStars++;
            }
        }
        while(numStars < 3) {
            returnOutput.push(<StarBorder fontSize="medium"/>);
            numStars++;
        }
        return returnOutput;
    }

    return (
        <div className="ml-20 mr-20">
            <div className="flex items-center space-x-4">
                <Avatar>{username.substring(0, 1)}</Avatar>
                <div>
                    <p className="text-xl">{username}</p>
                </div>
                <div className="flex">
                    {show(rating)}
                </div>
            </div>
            <div className="ml-14">
                <p>{reviewText}</p>
            </div>
        </div>
    )
}

export default Review
