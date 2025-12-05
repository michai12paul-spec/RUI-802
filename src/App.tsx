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
    </div>
  )
}

export default App
