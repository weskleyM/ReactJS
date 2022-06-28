import React from "react";

export default function Hero() {
    return (
        <section className="hero">
            <img
                className="hero--img"
                src="../images/grid-photo.png"
                alt="grid_img"
            />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">
                Join unique interactive activities led by one-of-kind hosts-all
                without leaving home
            </p>
        </section>
    );
}
