import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorder from '@mui/icons-material/StarBorder';

const GridItem = ({ history, name, spud, price, rating, image }) => {
    
    function showStars(intRating) {
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
        <div className="bg-white w-full h-70 rounded-xl bg-opacity-80 pl-4 pr-4 p-4 cursor-pointer shadow-lg" onClick={() => { history.push("/item/" + spud) }}>
            <div>
                <div className="flex flex-col items-center">
                    <div className="w-56 mt-2 mb-2 rounded-md">
                        <img
                            className=""
                            src={image}
                        />
                    </div>
                </div>

                <p className="text-xl">{name}</p>
                <div className="flex justify-between">
                    <div className="flex">
                        {showStars(rating)}
                    </div>
                    <p>{price/100}</p>
                </div>
            </div>
        </div>
    )
}

export default GridItem
