import React from "react";
import { useContext } from "react";
import { global } from "./Context";

export default function Count() {

    const {count,setCount} = useContext(global);
    
    if(count > 0 && count <= 10) {
        return(
            <div className="container">
                <div className="button_box">
                            <button onClick={() => {setCount(+count+1)}}>+</button>
                            <button onClick={() => {setCount(+count-1)}}>-</button>
                </div>
                <p className="counter">Your count is:{count}</p>
                <p className="texto" onClick={() => {setCount(0)}}>Reset</p>
            </div>
        )} 
    
    if(count > 10) {
        return(
            <div className="container">
                <div className="button_box">
                            <button onClick={() => {setCount(+count+1)}}>+</button>
                            <button onClick={() => {setCount(+count-1)}}>-</button>
                </div>
                <p className="counter">Your count is:{setCount(10)}</p>
                <p className="texto" onClick={() => {setCount(0)}}>Reset</p>
            </div>
        ) }
        
    else {
        return(
            <div className="container">
                <div className="button_box">
                            <button onClick={() => {setCount(+count+1)}}>+</button>
                            <button onClick={() => {setCount(+count-1)}}>-</button>
                </div>
                <p className="counter">Your count is:0 {setCount(0)}</p>
                <p className="texto" onClick={() => {setCount(0)}}>Reset</p>
            </div>
        )
    }
}