//import React from 'react'

const Card = (props) => {
    const {ico,hed,bod,bgColor} =props
  return (
    <div >
        <div className={`w-85.5 h-105 rounded-lg p-5 ${bgColor || 'bg-[#161A2D]'}`}>
        <img className="pb-15" src={ico} alt="" />
        <p>{hed}</p>
        <p>{bod}</p>
        <h2>Read More</h2>
        </div>
    </div>
  )
}

export default Card

