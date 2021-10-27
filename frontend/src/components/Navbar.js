import React, {useState} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar({ history }) {

    const [word, setWord] = useState("")

    const handleDown = (e) => {
        if (e.key === 'Enter') {
            console.log('do validate')
            history.push("/q/" + word)
        }
    }

    return (
        <div className="flex w-screen justify-between items-center pl-20 pr-20 pt-6 pb-6">
            <p className="text-xl font-semibold cursor-pointer" onClick={() => { history.push("/") }}>STOCKOLI</p>
            <input type="text" className="bg-white rounded w-2/5 h-10 outline-none pl-4 pr-4 text-lg" placeholder="Find items here" onKeyDown={handleDown} onChange={(e) => {setWord(e.target.value)}}/>
            <div className="flex space-x-20 items-center">
                <p className="cursor-pointer" onClick={() => { history.push("/aboutus") }}>ABOUT US</p>
                <AccountCircleIcon fontSize="large" className="cursor-pointer" onClick={() => { history.push("/account") }} />
                <ShoppingCartIcon fontSize="large" className="cursor-pointer" onClick={() => { history.push("/cart") }} />
            </div>
        </div>
    )
}

export default Navbar

