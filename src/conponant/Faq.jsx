//import React from 'react'
import img from '../assets/faq.png'
import Container from './Container';
import plus from '../assets/plus.png'

const Faq = () => {
  return (
    <>
    <Container>
    <div className='flex  gap-15 mt-25 mb-25'> 
        <div className='w-[40%]'><img src={img} alt="" /></div>
        <div className='w-[60%]'>
        <h3 className="text-black "> 
          <span className="w-2 h-2 rounded-full bg-black inline-block  mr-2"></span>Faq's </h3>
        <h3 className='text-black w-187.5 h-28.75  font-semibold text-[48px] mb-15'>
        What our customers say about their experience </h3>
              <div className='w-207.75 h-17 bg-[#F6F6F7] p-7 mt-5 rounded-md flex justify-between items-center font-semibold text-[18px]'>
                <p className='text-black'>1. How does the complete event register process actually work?</p>
                <img src={plus} alt="Expand" className="w-5 h-5" />
              </div>
              <div className='w-207.75 h-17 bg-[#F6F6F7] p-7 mt-5 rounded-md flex justify-between items-center font-semibold text-[18px]'>
                <p className='text-black'> 2. Where is the main event venue located precisely?</p>
                <img src={plus} alt="Expand" className="w-5 h-5" /> 
              </div>
              <div className='w-207.75 h-17 bg-[#F6F6F7] p-7 mt-5 rounded-md flex justify-between items-center font-semibold text-[18px]'>
                <p className='text-black'> 3. Can attendees freely switch between sessions and tracks?</p>
                <img src={plus} alt="Expand" className="w-5 h-5" /> 
              </div>

              <p>Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that
              interest you most, and customize your learning experience throughout the day.</p>

           
        </div>

    </div>
    </Container>
    </>
  )
}

export default Faq