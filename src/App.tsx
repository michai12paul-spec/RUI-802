import ImageTextOverlay from "./Components/ImageTextOverlay"
import LeftColumn from "./Components/LeftColumn"
import RightColumn from "./Components/RightColumn"
import Footer from "./Footer"

function App() {

  return (
    <div className="flex flex-col items-center justify-center h-screen">

      <ImageTextOverlay />
      
      <div className="flex">
        <LeftColumn />


        <RightColumn />
      </div>

      <Footer />

    </div>
  )
}

export default App
