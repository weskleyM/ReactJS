import React from "react";
import Logo from "../images/abnb-logo.png";

export default function Navbar() {
    return (
        <nav>
            <img className="nav--logo" src={Logo} alt="airbnb_logo" />
        </nav>
    );
}
