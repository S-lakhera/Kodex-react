import { useState } from "react"
import Login from "./components/Login.jsx"
import Register from "./components/Register.jsx"
// import { Activity } from "react"


const App = () => {

  const [ isVisible, setIsVisible] = useState(true)

  return (
    <>
    {/* <Activity mode={isVisible? "visible" : "hidden"} >
      <Register fn={setIsVisible}/>
    </Activity>
    <Activity mode={!isVisible? "visible" : "hidden"} >
      <Login fn={setIsVisible}/>
    </Activity> */}
    {
      isVisible ? 
      <Register fn = {setIsVisible}/> :
      <Login fn = {setIsVisible}/>
    }
    </>
  )
}

export default App
