import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import Card from "./components/Card";
import Card_01 from "./images/card_01.jpg"
import Card_02 from "./images/card_02.jpg"
import Card_03 from "./images/card_03.jpg"
import Star from "./images/star.png"

export default function App() {
    return (
        <div>
            {/* <Navbar /> */}
            {/* <Hero /> */}
            <Card card={Card_01} star={Star} />
            <Card card={Card_02} star={Star} />
            <Card card={Card_03} star={Star} />
        </div>
    );
}
