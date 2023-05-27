import { useRef } from "react";

const Ref = () => {
    const studentName = useRef();
    const idan = useRef();
   

   const change=()=>{
    const idanStyle = {
        color :"red",
        fontSize: "2rem",
        transition: "2s"
    }

    idan.current.style.color = idanStyle.color;
    idan.current.style.fontSize = idanStyle.fontSize;
    idan.current.style.transition = idanStyle.transition;




    }
    return ( 
        <>
        <div ref={idan} > My name is Idan!</div>
        <button onClick={change}>Click!</button>
        { console.log(studentName.current) }
        {console.log(idan.current) }

        </>
     );
}
 
export default Ref;