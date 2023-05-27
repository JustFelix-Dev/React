import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Nested from "./Nested"


const SignUp = () => {
    const [ array,setArray ] = useState([])
    const[ student,setstudent ] = useState({
      name: '',
      school:'',
      country:''
    })
  
    const changeValue=(e)=>{
      setstudent({
        ...student,[e.target.name]:e.target.value 
    })
    }
    const handleArray = (e)=>{
      e.preventDefault()
      setArray([...array, student])
      localStorage.setItem('localArray',JSON.stringify(array))
      setstudent({name:'',school:'',country:''})
    }
  
    return ( 
        <>
    <div className="form">
      <form action="">
        <img src='' alt="" /> <br />
         <label>Name:</label> <br />
         <input type="text" value={student.name} onChange={changeValue} name="name" required/> <br />
         <label>School:</label> <br />
         <input type="text" value={student.school}onChange={changeValue} name='school' required /><br />
         <label>Country:</label> <br />
         <input type="text" value={student.country} onChange={changeValue} name='country' required/> <br />
         <button onClick={handleArray}>Submit</button>
      </form>
    </div>
         <hr />
         <table className='table table-striped table-bordered border-success table-hover' style={{width:"70%",margin:"1rem auto"}}>
        <thead className='text-center' style={{fontWeight:"bold"}}>
          <tr>
            <td>S/N</td>
            <td>Name</td>
            <td>School</td>
            <td>Country</td>
          </tr>
        </thead>
        {
          array.map((student,index)=>(
             <tbody key={index}>
              <tr >
                <td className='text-center'>{index+1}</td>
                <td>{student.name}</td>
                <td>{student.school}</td>
                <td>{student.country}</td>

              </tr>
             </tbody>
          ))
        }
         </table>
         <hr />
         
         <Routes>
      <Route path="extracard"  element={<Nested/>}/>
        </Routes>
        </>
     );
}
 
export default SignUp;