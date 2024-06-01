import React from "react";
import { useContext } from "react";
import { global } from "./Context";

export default function Button() {
    
    const {count,setCount} = useContext(global);

    return(
        <>
        <div className="container">
            <input type="text" className="numshkala"></input>
            <meter min={0} max={100} 
            low={30} high={70} optimum={0} 
            value={25}>75</meter>
            <button className="shkala" onMouseUp={() => {
                let a = document.querySelector('.numshkala');
                let b = document.querySelector('meter');
                b.value = a.value;
                // a.style.backgroundColor = `#0${a.value}`;
                window.location.href = "http://localhost:3000/loto"
            }}>color</button>
        </div>
        </>
    )
}