

import './App.css'
import Footer from './footer/Footer'
import NavBar from './nav/NavBar'
import {Routes,Route} from 'react-router-dom'
import Home from './workspace/Home'
import BuildSpace from './workspace/BuildSpace'



function App() {
  

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/buildspace' element={<BuildSpace/>}/>
      
    </Routes>
    <Footer/>
   
     
    </>
  )
}

export default App
