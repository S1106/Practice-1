import React, { createContext , useState } from "react";

export const global = createContext();

export default function Context(props) {

    const [count,setCount] = useState(localStorage.getItem('counter'));

    function dragStartHandler(e) {
        //setCount("STOP");
        console.log("start")
    }

    function dropHandler(e) {
        //setCount("END");
        console.log("drop")
    }

    // console.log(count)

    localStorage.setItem('counter',count)

    let value = {
        count,
        setCount,
        dragStartHandler,
        dropHandler
    }

    // console.log(count);

    return(
        <global.Provider value={value}>
            {props.children}
        </global.Provider> 
    )
}