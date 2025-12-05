

function App() {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex">

        {/* Left Column */}
        <div className="flex flex-col mr-20  ">
          <h1 className="text-4xl font-bold text-blue-950 p-2"> Book a trip with us</h1>
          <h2 className="text-wrap w-150 text-base p-2 text-blue-800">Are you ready to transform your life, achive your goals, and make a positive change? It all stars with taing action. Embrace the opportunity to seize your future now.</h2>
        </div>



        {/* Right Column */}
        <div className="flex flex-col justify-center items-center">
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
      </div>
    </div>
  )
}

export default App
