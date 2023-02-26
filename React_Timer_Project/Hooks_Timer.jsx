import React, { useState } from 'react';


const HooksP=()=>{
    const time=new Date().toLocaleTimeString();
    const [ctime,settime]=useState(time);
    const refresh=()=>{
       let ntime=new Date().toLocaleTimeString();
       
        settime(ntime);
    };
    return(
        <>
        <div>
        <h1>{time}</h1>
        <button className='btn' onClick={refresh}>Get Time</button>
        </div>
        </>
    )
}

export default HooksP;