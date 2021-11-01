import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../config/Firebase'

const Login = ({history}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginHandler = async () => {
        const response = await auth.signInWithEmailAndPassword(email, password)

        console.log(response.user.email)
        console.log(response.user.uid)
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user){
                console.log("YESSS")
                history.push("/")
            }else{
                console.log("NOOOOO")
            }
        })
    })

    return (
        <div className="w-screen h-screen bg-glass">
            <div className="bg-clip-padding backdrop-blur-xl backdrop-filter bg-gray-100 bg-opacity-30 h-screen flex">
                <div className="flex justify-center h-screen place-items-center text-left m-auto">
                    <div className="text-center">
                        <form className="border p-10 rounded-xl border-gray-50 shadow bg-white bg-opacity-60">

                            <h3 className="text-4xl font-bold text-arca-blue mb-10">Login</h3>
                            <div className="w-80 text-left space-y-6">
                                <div className="border py-2 pl-2 rounded-lg border-gray-200">
                                    {/* <label for="">Email: </label> */}
                                    <input type="text" required id="email" placeholder="Email" className="focus:outline-none pr-2 w-full bg-transparent" onChange={(e) => {setEmail(e.target.value)}}/>
                                </div>

                                <div className="border py-2 rounded-lg pl-2 border-gray-200">
                                    {/* <label for="password">Password: </label> */}
                                    <input type="password" required id="password" placeholder="Password" className="focus:outline-none pr-2 w-full bg-transparent" onChange={(e) => {setPassword(e.target.value)}}/>
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="mt-8 mb-4 border px-4 py-3 rounded-lg bg-arca-red w-full text-white bg-black" onClick={(e) => {
                                    e.preventDefault()
                                    loginHandler()}}>Login</button>
                                <p className="">Don't have an account? <Link className="text-arca-blue underline" to="/signup">Signup</Link></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
