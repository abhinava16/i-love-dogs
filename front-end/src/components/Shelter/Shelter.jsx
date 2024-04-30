import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Shelter() {

  const [shelters, setShelters] = useState([])
  useEffect(()=>{
    loadShelters()
  },[])

  const loadShelters = async ()=>{
    const response = await axios.get("http://localhost:8080/shelters")
    setShelters(response.data)
    
  }

  return (
    <div className='container'>
            <h1 className='text-3xl text-center text-red-700 p-10 font-bold'>Find out your nearest one!</h1>
        
                <table className='table-fixed mx-auto items-center justify-between rounded mb-5'>
                    {/* <thead className='bg-red-50'> //Removed it for better UX 
                        <th className='px-10 py-4' scope='col'>Shelter Name</th>
                        <th className='px-10 py-4' scope='col'>Phone</th>
                        <th className='px-10 py-4' scope='col'>Email</th>
                        <th className='px-10 py-4' scope='col'>Address</th>
                    </thead> */}
                    <tbody className='bg-white'>
                      {shelters.map((shelter, index)=>{
                        return(
                        <tr className=' rounded-lg hover:bg-red-700 hover:text-white border-spacing-2'>
                          <td className='px-10 py-3 items-center font-semibold'>{shelter.name}</td>
                          <td className='px-10 py-2 items-center'>{shelter.phone}</td>
                          <td className='px-10 py-2 items-center'>{shelter.email}</td>
                          <td className='px-10 py-2 items-center'>{shelter.address}</td>
                        </tr>
                      )})}
                    </tbody>

                </table>
        </div>
  )
}

export default Shelter