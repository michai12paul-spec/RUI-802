import ImageTextOverlay from "./Components/ImageTextOverlay"
import LeftColumn from "./Components/LeftColumn"
import RightColumn from "./Components/RightColumn"

function App() {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      
      <ImageTextOverlay/>


      <div className="flex">

        {/* Left Column */}
        <LeftColumn/>


        {/* Right Column */}
        <RightColumn/>

      </div>
      <div >
        <h1 className="font-bold text-base p-2  bg-white text-teal-600 w-screen outline items-center"> Travel Agency</h1>
        <i className="fa-brands fa-facebook-f"></i>
      </div>

    </div>
  )
}

export default App
