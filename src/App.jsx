
import './App.css'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Create from './Components/Create/Create'
import Update from './Components/Update/Update'
import Read from './Components/Read/Read'

function App() {
  

  return (
    <>
       <BrowserRouter>
       
       <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/create' element={<Create/>}> </Route>
        <Route path='/update/:id' element={<Update/>}> </Route>
        <Route path='/read/:id' element={<Read/>}> </Route>
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
