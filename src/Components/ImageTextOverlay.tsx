
const ImageTextOverlay = () => {
  return (
    <div className="relative">
          <img className="w-screen h-240 mb-50" src="public/Nature Scape.webp" alt="" />
          <div className="absolute bottom-140 left-165 ">
            <h1 className="text-6xl text-white font-bold"> Explore the World </h1>
          </div>
          <div className="absolute bottom-130 left-185 ">
            <h1 className="text-xl text-white "> Your travel desitiny, written in the stars </h1>
          </div>
      </div>
  )
}

export default ImageTextOverlay