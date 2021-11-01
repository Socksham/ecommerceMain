import React from 'react'
import { Avatar } from '@mui/material'

const Review = () => {
    return (
        <div className="ml-20 mr-20">
            <div className="flex items-center space-x-4">
                <Avatar>S</Avatar>
                <div>
                    <p className="text-xl">Stephanie B.</p>
                </div>
            </div>
            <div className="ml-14">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum ut tellus sed eleifend. In ligula urna, congue egestas viverra condimentum, pellentesque nec nulla. Cras ut eros et odio tempus condimentum vel quis diam. Vivamus vel facilisis turpis. Etiam et nisi et dolor vulputate vehicula at ac nulla. Fusce et lacinia elit. Donec efficitur tempus magna, id tincidunt sem interdum vitae.</p>
            </div>

        </div>
    )
}

export default Review
