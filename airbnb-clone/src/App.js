import React from "react";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App() {
    return (
        <div>
            <Navbar />
            {/* <Hero /> */}
            <Card
                img="card_01.jpg"
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life lessons with Katie Zarefas"
                price={136}
            />
        </div>
    );
}
