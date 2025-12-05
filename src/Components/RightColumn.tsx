import React from 'react'

const RightColumn = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-30">
          <div>
            <h1 className="font-bold text-2xl text-purple-950"> Get 40% OFF on your first trip</h1>
          </div>
          <div className="m-3 w-80 text-purple-300 text-lg">
            <h2> Join our community ad be the first to know about the latest news, offers, and exciting content.</h2>
          </div>
          <input type="text" className="text-2xl rounded-lg outline-2 outline-gray-300 mr-5 w-78 h-9" />
          <div className="p-5 ml-10">
            <button className="p-1 w-78 h-10 text-2xl bg-red-800 rounded-lg mr-15 text-lg text-white font-bold"> Claim Offer</button>
          </div>
        </div>
  )
}

export default RightColumn