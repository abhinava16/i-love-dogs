import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Dog() {
  const [dogs, setDogs] = useState([])
  useEffect(()=>{
    loadDogs()
  },[])

  const loadDogs = async ()=>{
    const response = await axios.get("http://localhost:8080/dogs")
    setDogs(response.data)
    
  }
  return (
    <div className='w-full'>
    <div className=' text-center w-full'>
            <h1 className='text-3xl text-center text-red-700 p-10 font-bold'>Needs to be Rescued</h1>
        
                <table className='table-fixed mx-auto items-center text-left rounded mb-5'>
                    <tbody className='bg-white grid grid-cols-5'>
                      {dogs.map((dog, index)=>{
                        return(
                        <tr className='hover:border-b hover:border-solid hover:border-red-700 border-spacing-2'>
                          <td className='px-10 py-3 items-center'><p className='font-semibold'>{dog.dog_name}</p>{dog.age} Months, {dog.breed}</td>
                        </tr>
                      )})}
                    </tbody>
                </table>
    </div>
  </div>
  )
}

export default Dog