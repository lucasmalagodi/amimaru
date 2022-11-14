import React from "react";
import { ReactComponent as Amimaru } from "../assets/amimaru.svg";
import "./Header.css";



const Header = () => {
    return (
        <div className="header">
            <Amimaru />
        </div>
    );
}

export default Header;