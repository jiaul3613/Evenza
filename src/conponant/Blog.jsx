//import React from 'react'
import Container from "./Container"
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'

const Blog = () => {
  return (
        <div className="mt-15 mb-15">
            <Container>
                <h3 className="text-black text-center"> 
                <span className="w-2 h-2 rounded-full bg-black inline-block align-middle mr-2"></span>
                Latest Blog
                </h3>
                <h3 className='text-black w-187.5 h-28.75 mx-auto text-center font-semibold text-[48px] mb-15'>
                Explore our latest insights stories and updates
                </h3>
            <div className="flex justify-between items-center gap-5">
                <div>
                    <img src={blog1} alt="" />
                </div>
                <div >
                    <img className="mb-5" src={blog2} alt="" />
                    <img src={blog3} alt="" />

                </div>
            </div>
        
            </Container>
        </div>
      )
}

export default Blog