import React, { useEffect, useState } from 'react'
import axios from "axios"

function Feedback() {

  const [feedbacks, setFeedbacks] = useState([])
  const [rating, setRating] = useState()
  const [review, setReview] = useState()
  const [date, setDate] = useState()
  useEffect(()=>{
    loadFeedbacks()
  },[])

  const loadFeedbacks = async ()=>{
    const response = await axios.get("http://localhost:8080/feedbacks")
    setFeedbacks(response.data)
    
  }
  const sendFeedback = async (e) =>{
    e.preventDefault()
    const result= await axios.post("http://localhost:8080/feedback", {
        rating: rating,
        review: review,
        date: date
    })
    console.log(result)
  }

  return (
    <>
        <div className='container'>
            <h1 className='text-3xl text-center text-red-700 p-10 font-bold'>Your Feedback, Our Love!</h1>
        
                <table className='table-fixed bg-white mx-auto items-center justify-between rounded-lg'>
                    <tbody>
                    {feedbacks.map((feedback, index)=>{
                        return(
                        <tr className='hover:border hover:border-red-700 hover:border-solid'>
                            <td className='px-10 py-2 items-center font-semibold'>{feedback.review}</td>
                            <td className='px-10 py-2 items-center'>
                                <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
                                {feedback.rating}.0 
                                </span> {" "} {feedback.date}
                            </td>
                            
                        </tr>
                        )})}
                    </tbody>
                </table>
        </div>
      <div className="relative flex items-top justify-center pt-50 bg-white sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            
                <div className="mt-8 overflow-hidden">
                
                            <div className="flex items-center mt-8 text-gray-600">
                                
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                
                                </div>
                            </div>
                            


                          
                        <form className="p-6 flex flex-col justify-center" onSubmit={sendFeedback}>
                        <h1 className=' font-bold text-center text-xl'>Your feedback makes us grow Stronger!</h1>
                            <div className="flex flex-col pt-4">
                                <label htmlFor="rating">
                                    Rating:
                                </label>
                                <input
                                    type="number"
                                    min={1}
                                    max={5}
                                    name="rating"
                                    id="rating"
                                    placeholder="5"
                                    onChange={(e)=>setRating(e.target.value)}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-red-500 focus:outline-none"
                                    required
                                />
                            </div>
                            
                            <div className="pt-2 flex flex-col mt-2">
                                <label htmlFor="review">
                                  Review:
                                </label>
                                <input
                                    type="text"
                                    name="review"
                                    id="review"
                                    placeholder="Your review"
                                    onChange={(e)=>setReview(e.target.value)}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-red-500 focus:outline-none"
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

    </>
  )
}

export default Feedback