

import './App.css'
import Footer from './footer/Footer'
import NavBar from './nav/NavBar'
import {Routes,Route} from 'react-router-dom'
import Home from './workspace/Home'
import BuildSpace from './workspace/BuildSpace'
import ResumeTest from './ResumeTest'


function App() {
  

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/buildspace' element={<BuildSpace/>}/>
      <Route path='/testingtemplate' element={<ResumeTest/>}/>
    </Routes>
    <Footer/>
   
     
    </>
  )
}

export default App
