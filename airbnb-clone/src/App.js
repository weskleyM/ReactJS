import React from "react";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import Card from "./components/Card";
import Card_01 from "./images/card_01.jpg";

export default function App() {
    return (
        <div>
            <Navbar />
            {/* <Hero /> */}
            <Card
                img={Card_01}
                rating="5.0"
                reviewCount={6}
                country=" USA"
                title="Life lessons with Katie Zarefas"
                price={136}
            />
        </div>
    );
}
