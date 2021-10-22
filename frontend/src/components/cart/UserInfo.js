import React from 'react'

const UserInfo = () => {
    return (
        <div>
            <div className="">
                <div className="flex space-x-4">
                    <div>
                        <p>First Name*</p>
                        <input type="text" className="bg-black w-72 h-10 rounded" />
                    </div>
                    <div>
                        <p>Last Name*</p>
                        <input type="text" className="bg-black w-72 h-10 rounded" />

                    </div>
                </div>
                <div className="mt-4 flex space-x-4">
                    <div>
                        <p>Address*</p>
                        <input type="text" className="bg-black w-96 h-10 rounded" />
                    </div>
                    <div>
                        <p>Apt. Suite</p>
                        <input type="text" className="bg-black w-48 h-10 rounded" />
                    </div>

                </div>
                <div className="flex space-x-4 mt-4">
                    <div>
                        <p>City*</p>
                        <input type="text" className="bg-black w-72 h-10 rounded" />
                    </div>
                    <div>
                        <p>Country*</p>
                        <input type="text" className="bg-black w-72 h-10 rounded" />

                    </div>
                </div>
                <div className="flex space-x-4 mt-4">
                    <div>
                        <p>Postal Code*</p>
                        <input type="text" className="bg-black w-72 h-10 rounded" />
                    </div>
                </div>
                {/* <div className="mt-4">
                        <p>Address Type*</p>
                        <div className="flex space-x-56" onChange={(e) => {setRadio(e.target.value)}}>
                            <div>
                                <input type="radio" name="drone" value="huey"
                                />
                                <label for="huey">Huey</label>
                            </div>
                            <div>
                                <input type="radio" name="drone" value="blah"
                                />
                                <label for="blah">blah</label>
                            </div>

                        </div>
                    </div> */}
                <div className="w-48 h-10 bg-black mt-8 rounded relative flex cursor-pointer">
                    <p className="text-white m-auto">Save and Deliver</p>
                </div>
            </div>

        </div>
    )
}

export default UserInfo
