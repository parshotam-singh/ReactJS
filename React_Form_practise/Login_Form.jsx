import React, { useState } from 'react'

const Login=()=>{
    const [name,setName]=useState("");
    const[fullName,setFullName]=useState("");

    const [lname,setlname]=useState("");
    const[lastName,setlastName]=useState("");

    const inputEvent=(event)=>{
         //console.log(event.target.value);
         setName(event.target.value);
    }
    const inputEvent2=(event)=>{
        //console.log(event.target.value);
        setlname(event.target.value);
   }
    const onSubmit=(event)=>{
        event.preventDefault();
        setFullName(name);
        setlastName(lname);
    }

    return(
        <>
        <div className='main_div'>
        <form onSubmit={onSubmit}>
        <div>
        <h1>Hello {fullName} {lastName}</h1>
        <input type="text" placeholder="Enter your First Name" onChange={inputEvent} value={name}></input>
        <input type="text" placeholder="Enter Your Last Name" onChange={inputEvent2} value={lname}></input>
        <button>Click Me</button>
        </div>  
        </form> 
        </div>
        </>
    )
}

export default Login;