import React from 'react'
import Shelter from '../Shelter/Shelter';

function Home() {
    return (
        <div className="mx-auto my-auto w-full max-w-7xl">
            <div className=' pt-12 pl-10'>
                <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
                <div class="transform scale-110 -rotate-6">
                    <img src="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=600" className='shadow-lg rounded-lg' alt="" loading="lazy"/>
                </div>
                <div className="col-start-3 transform scale-100 rotate-6 translate-x-2 translate-y-15">
                    <img src="https://images.pexels.com/photos/1350563/pexels-photo-1350563.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='shadow-lg rounded-lg' loading="lazy"/>
                </div>
                <div className="transform scale-150 translate-y-11">
                    <img src="https://images.pexels.com/photos/16209068/pexels-photo-16209068/free-photo-of-sitting-rescue-dog.jpeg?auto=compress&cs=tinysrgb&w=600" className='shadow-lg rounded-lg' alt="" loading="lazy"/>
                </div>
                <div className="transform translate-y-24">
                    <img src="https://images.pexels.com/photos/3628100/pexels-photo-3628100.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='shadow-lg rounded-lg' loading="lazy"/>
                </div>
                <div className="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4">
                    <img src="https://images.pexels.com/photos/19145893/pexels-photo-19145893/free-photo-of-dog-groomer-at-work.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='shadow-lg rounded-lg' loading="lazy"/>
                </div>
                </div>
            </div>

            <Shelter />
        </div>
    );
}

export default Home