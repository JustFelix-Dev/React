import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Fetch from './Fetch'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes,Route,Navigate,  } from 'react-router-dom'
import SignUp from './assets/SignUp'
import NavBar from './assets/Navbar'
import Card from './assets/Card'
import Details from './assets/Details'
import Formiked from './assets/Formiked'
import Ref from './assets/Ref'
import Syntax from './assets/Syntax'
// import Nested from './assets/Nested'



function App() {
  const[cartIsEmpty] = useState(false);
  return (
   <>
   <BrowserRouter>
   <Syntax/>
    <Ref/>
   <Formiked/>
   <NavBar/>
   <Routes>
      <Route path="/" element={<Fetch/>}/>
      <Route path="/signup/*" element={<SignUp/>}/>
      <Route path="/integer"
       element={ 
      cartIsEmpty ? <Navigate to={'/signup'}/> : <p>Checkout</p>
      }/>
      <Route path='/users/:name' element={<Details/>}/>

    </Routes>
    <div className="container">
      <div className="row">
      <Card 
      name="card bg-danger text-light mx-2 my-2"
       title='First Card'
       />
      <Card
     name="card bg-warning text-light mx-2 my-2"
     title='Second Card'
     />
    
      </div>
    </div>
   </BrowserRouter>
   </>
  )
}

export default App;
