import React from "react";
import { useContext } from "react";
import { global } from "./Context";

export default function Description() {

    const {setCount} = useContext(global)

    return (
        <div className="description">
            <h1>Welcome to our Website</h1>
            <span className="greating">In a world where every niche is crowded with competitors, both fresh startups and established giants, standing out is not just tough; it's a survival game.Not having a strong company profile presentation can lead to missed opportunities and potential customers slipping through your fingers. 
            But here's the good news: I believe your company can not only compete but also shine.
            Stick with me, and you'll learn to create a company profile presentation that not only stands out but also holds its own against the big players. I’m going to walk you through easy-to-implement, effective ways to elevate your company profile from just another name to a standout brand.
            Let’s get started!</span>
        </div>
    )
}