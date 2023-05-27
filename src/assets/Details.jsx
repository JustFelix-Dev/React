import { Route, Routes, useParams } from "react-router-dom";

const Details = () => {
   const {name} = useParams();
    return ( 
        <>
        <h2>Welcome - <span style={{color:"green",fontWeight:550}}>{name}</span></h2>
        <hr />
     

        </>
     );
}
 
export default Details;