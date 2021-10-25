import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div style={{ backgroundImage: "url(\"https://image.freepik.com/free-vector/hand-drawn-minimal-background_23-2149017007.jpg" }} className="w-screen h-screen bg-cover border-1 rounded-md bg-repeat-y bg-center">
            <div className="bg-clip-padding backdrop-blur-xl backdrop-filter bg-gray-100 bg-opacity-30 h-screen flex">
                <div className="flex justify-center h-screen place-items-center text-left m-auto">
                    <div className="text-center">
                        <form className="border p-10 rounded-xl border-gray-50 shadow bg-white bg-opacity-60">

                            <h3 className="text-4xl font-bold text-arca-blue mb-10">Login</h3>
                            <div className="w-80 text-left space-y-6">
                                <div className="border py-2 pl-2 rounded-lg border-gray-200">
                                    {/* <label for="">Email: </label> */}
                                    <input type="text" required id="email" placeholder="Email" className="focus:outline-none pr-2 w-full bg-transparent" />
                                </div>

                                <div className="border py-2 rounded-lg pl-2 border-gray-200">
                                    {/* <label for="password">Password: </label> */}
                                    <input type="password" required id="password" placeholder="Password" className="focus:outline-none pr-2 w-full bg-transparent" />
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="mt-8 mb-4 border px-4 py-3 rounded-lg bg-arca-red w-full text-white bg-black">Login</button>
                                <p className="">Don't have an account? <Link className="text-arca-blue underline" to="/signup">Register</Link></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
