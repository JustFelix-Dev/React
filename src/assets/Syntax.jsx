import { useState } from "react";

const Syntax = () => {
    const persons = {
        firstname : 'Joshua',
        lastname: 'Owonikoko',
        age: '20',
    }
    
    const array = [1,2,3,4,5]
    array.push()
    const [person,setPerson] = useState(persons)
    const [myarray, setMyArray]= useState(array)

    

   const handleChange =()=>{
      setPerson({...person,lastname:'Felix',firstname:'Bolu'})
      console.log(person)
      console.log(myarray)
   }

    return ( 
        <>
    <button onClick={handleChange}>Button</button>
        </>
     );
}
 
export default Syntax;