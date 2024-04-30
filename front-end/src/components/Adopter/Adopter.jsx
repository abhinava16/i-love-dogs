import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Adopter() {
  const [adopters, setadopters] = useState([])
  useEffect(()=>{
    loadadopters()
  },[])

  const loadadopters = async ()=>{
    const response = await axios.get("http://localhost:8080/adopters")
    setadopters(response.data)
    
  }
  return (
    <div className='w-full'>
    <div className=' text-center w-full'>
            <h1 className='text-3xl text-center text-red-700 p-10 font-bold'>They shared their love, are you ready!</h1>
        
                <table className='table-fixed mx-auto items-center text-left rounded mb-5'>
                    {/* <thead className='bg-red-50'> //Removed it for better UX 
                        <th className='px-10 py-4' scope='col'>adopter Name</th>
                        <th className='px-10 py-4' scope='col'>Description</th>
                    </thead> */}
                    <tbody className='bg-white grid grid-cols-5'>
                      {adopters.map((adopter, index)=>{
                        return(
                        <tr className='hover:border-b hover:border-solid hover:border-red-700 border-spacing-2'>
                          <td className='px-10 py-3 items-center font-semibold'>{adopter.fullname}</td>
                        </tr>
                      )})}
                    </tbody>
                </table>
    </div>
  </div>
  )
}

export default Adopter