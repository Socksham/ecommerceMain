import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const GridItem = () => {
    return (
        <div className="bg-white w-full h-70 rounded-xl bg-opacity-80 pl-4 pr-4 p-4 shadow">
            <div>
                <div className="flex flex-col items-center">
                    <div className="w-56 mt-2 mb-2 rounded-md">
                        <img
                            className=""
                            src="https://purepng.com/public/uploads/large/purepng.com-flourflourgrainscerealbread-1411527418592jo6pj.png
                "
                        />
                    </div>
                </div>

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
