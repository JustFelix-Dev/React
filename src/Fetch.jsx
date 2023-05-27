import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Fetch = () => {
    const endpoint = "https://jsonplaceholder.typicode.com/users"
    const [ result ,setresult ] = useState([])

    const getData = ()=>{
          axios.get(endpoint)
          .then((response)=>{
            setresult(response.data)
          })
          .catch((err)=>{
            console.log(err.message);
          })
    }

    const navigate = useNavigate()
    const handleClick =()=>{
        navigate('/signup')

    }
    return ( 
        <>
        <button className="btn btn-outline-success" onClick={handleClick}>Redirect!</button>
        <div className="container">
            <h1>Fetch API:</h1>
            <button className="btn btn-outline-primary" onClick={getData}>Get Info</button>
        </div>
        
            <table className='table table-striped table-responsive table-bordered border-info table-hover' style={{width:"80%",margin:"1rem auto"}}>
                <thead className='text-center' style={{fontWeight:"bold"}}>
                    <tr>
                        <td>S/N</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Website</td>
                        <td>UserName</td>
                    </tr>
                </thead>
               {
               result.map((data,index)=>(
                    <tbody key={data.id} className="text-center" >
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.website}</td>
                            <td>{data.username}</td>
                        </tr>
                    </tbody>
                ))
               }

            </table>
          
             
        </>
     );
}
 
export default Fetch;