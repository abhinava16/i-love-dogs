import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Events() {
  const [events, setEvents] = useState([])
  useEffect(()=>{
    loadEvents()
  },[])

  const loadEvents = async ()=>{
    const response = await axios.get("http://localhost:8080/events")
    setEvents(response.data)
    
  }
  return (
    <div className='container text-center'>
            <h1 className='text-3xl text-center text-red-700 p-10 font-bold'>Upcoming Events!!</h1>
        
                <table className='table-fixed mx-auto items-center text-left rounded mb-5'>
                    {/* <thead className='bg-red-50'> //Removed it for better UX 
                        <th className='px-10 py-4' scope='col'>event Name</th>
                        <th className='px-10 py-4' scope='col'>Description</th>
                    </thead> */}
                    <tbody className='bg-white'>
                      {events.map((event, index)=>{
                        return(
                        <tr className='hover:border-b hover:border-solid hover:border-red-700 hover:text-red-700 border-spacing-2'>
                          <td className='px-10 py-3 items-center font-semibold'>{event.event_name}</td>
                          <td className='px-10 py-2 items-center'>{event.event_description}</td>
                        </tr>
                      )})}
                    </tbody>
                </table>
                <h1 className=' text-lg text-rose-700 pb-5'><Link to='/apply' className='font-bold hover:text-black font-serif hover:border-b hover:border-solid hover:border-red-700'>Contact us</Link> to know more about the events.</h1>
        </div>
  )
}

export default Events