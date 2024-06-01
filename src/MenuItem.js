import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { global } from './Context';
import "./style.css";

export default function MenuItem({image, title,  url}) {
    const data = useContext(global);
    const isEvent = () => {
        if (url === "/") {return () => data.setOpenWindow(true)}
    }

    return (
        <li  className="menu__item" onClick = {isEvent()}>
            <Link to = {url}>
                <p>{title}</p>
                {/* <span>{url}</span> */}
            </Link>
        </li>
    )
}