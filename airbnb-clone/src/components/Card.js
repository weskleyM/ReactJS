import React from "react";
import Star from "../images/star.png";
import Card_01 from "../images/card_01.jpg";
import Card_02 from "../images/card_02.jpg";
import Card_03 from "../images/card_03.jpg";

export default function Card() {
    return (
        <div className="card">
            <img className="card--img" src={Card_01} alt="card_01" />
            <div className="card--stats">
                <img className="star--icon" src={Star} alt="star_icon" />
                <span>5.0</span>
                <span className="gray">(6) * </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zarefas</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    );
}
