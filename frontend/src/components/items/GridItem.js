import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const GridItem = () => {
    return (
        <div className="bg-white w-full h-64 rounded-xl bg-opacity-80 pl-4 pr-4">
            <div>
                <p className="text-xl">Chinese Broccoli</p>
                <div className="flex justify-between">
                    <div className="flex">
                        <StarIcon fontSize="medium" />
                        <StarIcon fontSize="medium" />
                        <StarIcon fontSize="medium" />
                    </div>
                    <p>13.99</p>
                </div>
            </div>
        </div>
    )
}

export default GridItem
