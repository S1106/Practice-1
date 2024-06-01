import React from 'react';
import MenuItem from './MenuItem';
import "./style.css";

export default function Menu() {
   
    return ( 
    <>
    <ul className="menu__items">
        <MenuItem 
            title = "Greatings"
            url = "/description"
        />

        <MenuItem 
            title = "Set count"
            url = "/button"
        />
        
        <MenuItem 
                title = "Count"
                url = "/count"
        />
        <MenuItem 
                title = "Contact details"
                url = "/loto"
        />
    </ul>
    </>
    );
} 