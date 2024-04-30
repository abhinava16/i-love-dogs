import axios from 'axios'
import React, { useState } from 'react'

function Maintainence() {

    const [shelter_ID, setShelterID] = useState()
    const [description, setDescription] = useState()
    const [date, setDate] = useState()

    const sendRequest = async (e) => {
        e.preventDefault()
        const result = await axios.post('http://localhost:8080/request', {
            shelter_ID: shelter_ID,
            description: description,
            date: date
        })
        console.log(result)
    }

  return (

    <div className="relative flex items-top justify-center min-h-[600px] bg-white sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                        <form className="p-6 flex flex-col justify-center" onSubmit={sendRequest}>
                        <h1 className=' font-bold text-center text-xl'>Raise a Request:</h1>
                            <div className="flex flex-col pt-4">
                                <label htmlFor="shelter_ID">
                                    Shelter ID:
                                </label>
                                <input
                                    type="number"
                                    name="shelter_ID"
                                    id="shelter_ID"
                                    min={101}
                                    max={110}
                                    placeholder="Shelter ID"
                                    onChange={(e)=>setShelterID(e.target.value)}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-red-500 focus:outline-none"
                                    required
                                />
                            </div>
                            
                            <div className="pt-2 flex flex-col mt-2">
                                <label htmlFor="description">
                                  Description:
                                </label>
                                <input
                                    type="text"
                                    name="description"
                                    id="description"
                                    placeholder="Enter request description"
                                    onChange={(e)=>setDescription(e.target.value)}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-red-500 focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="pt-4 flex flex-col">
                                <label for="date">
                                    Today's Date:
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    onChange={(e)=>setDate(e.target.value)}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-red-500 focus:outline-none"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-red-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-red-600 transition ease-in-out duration-300"
                            >
                                Submit
                            </button>
                        </form>
                </div>
            </div>
        </div>
  )
}

export default Maintainence