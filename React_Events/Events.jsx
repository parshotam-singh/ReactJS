import React, { useState } from 'react'
/*
********** Events in React  **********

onChange, onClick, onMouseOver, 
onMouseOut, onKeyDown, onLand

*/
const Events =()=>{
    const purple="yellow";
    const [bg,setBg]=useState(purple);

    const [name,setName]=useState("ClickMe")

    const bgchange = () =>{
        let newBg="#34495e";
        setBg(newBg);
        setName("Ouch !!")
    };
    const bgBack=()=>{
        setBg(purple);
        setName("Ayyo !!");
    };
    return (
        <>    
            <div style={{backgroundColor:bg}}>
               <button onClick={bgchange} onDoubleClick={bgBack}>{name}</button>
            </div>
        </>
    );
};

export default Events;