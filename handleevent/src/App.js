import React, { useState } from 'react'
const App=()=>{
  const purple="#8e44ad";

  const [bg,setbg]=useState(purple);
  const [name,setName]=useState("click me");
  const bgChange=()=>{
    let newbg='#34495e';
    setbg(newbg);
    setName("ouch!! :");
  };
   
  const bgBack=()=>{
     setbg(purple);
     setName("ayyo!!")
   };
  return(
    <>
      <div style={{ backgroundColor:bg}}>
        <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
      </div>
    </>
  )
}
export default App ;