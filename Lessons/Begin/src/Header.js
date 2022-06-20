import React from "react";

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="react.ico" className="nav-logo" />
                <ul className="nav-itens">
                    <li>Menu</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}
