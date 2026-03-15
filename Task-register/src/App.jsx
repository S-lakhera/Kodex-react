import { useState } from "react"
import Login from "./components/Login.jsx"
import Register from "./components/Register.jsx"


const App = () => {

  const [ isVisible, setIsVisible] = useState(true)

  return (
    <>
    {
      isVisible ? 
      <Register fn = {setIsVisible}/> :
      <Login fn = {setIsVisible}/>
    }
    </>
  )
}

export default App
