import React from "react";
import { useContext } from "react";
import { global } from "./Context";

export default function Description() {

    const {setCount} = useContext(global)

    return (
        <div className="description">
            <span>Welcome to our Website</span>
            {/* <p className="texto" onClick={() => {setCount(0)}}>Reset</p> */}
        </div>
    )
}