import React, { useState } from 'react';


const Hooks=()=>{
    const state=useState();
    const [a,seta]=useState(1000);

    const incNum=()=>{
    seta(a+100);
    //console.log("clicked" + a++);
};
    return(
    <>
    <div>
    <h1 className='heading'>{a}</h1>
    <button className='btn' onClick={incNum}>CLICK ME</button>
    </div>
    </>

    )
    }

export default Hooks;