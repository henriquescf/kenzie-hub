import { Slide, ToastContainer } from "react-toastify"
import { RoutesMain } from "./routes/RoutesMain"
import "react-toastify/dist/ReactToastify.css"
import "./styles/reset.scss"
import "./styles/global.scss"
import "./styles/responsive.scss"

function App() {
  
  return (
    <>
      <ToastContainer position="bottom-right" transition={Slide} autoClose={2000}/>
      <RoutesMain/>
    </>
  )
}

export default App
