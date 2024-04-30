import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Training() {
  const [trainers, setTrainers] = useState([])
  useEffect(()=>{
    loadTrainers()
  },[])

  const loadTrainers = async ()=>{
    const response = await axios.get("http://localhost:8080/trainers")
    setTrainers(response.data)
    
  }
  return (
    <div className='container'>
            <h1 className='text-3xl text-center text-red-700 p-10 font-bold'>Contact Our Certified Trainer!</h1>
        
                <table className='table-fixed mx-auto items-center justify-between rounded mb-5'>
                    <tbody className='bg-white'>
                      {trainers.map((trainer, index)=>{
                        return(
                        <tr className=' hover:text-red-700 hover:font-bold hover:text-2xl hover:shadow-lg'>
                          <td className='px-10 py-3 items-center font-semibold'>{trainer.fullname}</td>
                          <td className='px-10 items-center'>{trainer.phone}</td>
                          <td className='px-10 items-center'>{trainer.email}</td>
                          <td className='px-10 items-center'>{trainer.speciality}</td>
                        </tr>
                      )})}
                    </tbody>

                </table>
        </div>
  )
}

export default Training