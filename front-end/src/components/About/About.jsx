import React from 'react'
import { Link } from 'react-router-dom';
import Adopter from '../Adopter/Adopter';

function About() {
    return (
    <>
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className=" md:4/12 lg:w-4/12">
                        <img
                        className=' shadow-lg rounded-lg'
                            src="https://images.pexels.com/photos/1904103/pexels-photo-1904103.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="logo"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            I Love Dogs! You love dogs too? Come to rescue! 
                        </h2>
                        <p className="mt-6 text-gray-600">
                        By adopting a rescue dog, you’re not only giving them a loving home but also helping to reduce pet overpopulation and support animal welfare organizations.<br/>These dogs often come from various backgrounds, some having experienced trauma or neglect. Your decision to adopt can make a significant difference in their lives.
                        </p>
                        <p className="mt-6 text-gray-600">
                        Shelters and rescues have dogs of all ages, from puppies to seniors. Each life stage presents different needs, so consider what age best fits your lifestyle. Spend time with potential companions. Observe their behavior during walks or play sessions. Are they friendly, anxious, or calm? Ensure the dog is healthy by asking about vaccinations, medical history, and any ongoing health issues.
                        </p>
                        <p className="mt-6 text-gray-600">
                        Some rescue dogs may require additional training. Be prepared to invest time and patience.Consider your living space and activity level. Some dogs thrive in an active environment, while others prefer a quieter setting.
                        </p>
                        <p className="mt-4 text-gray-600">
                        When you choose a rescue dog, you’re not just gaining a pet; you’re gaining a loyal companion who will love you unconditionally. Their gratitude and resilience are boundless.
                        </p>
                    </div>
                </div>  
            </div>
        </div>

    <Adopter />
    </>
    );
}

export default About