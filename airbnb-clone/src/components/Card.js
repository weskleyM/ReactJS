import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--img" src={props.card} alt="card_01" />
            <div className="card--stats">
                <img className="star--icon" src={props.star} alt="star_icon" />
                <span>5.0</span>
                <span className="gray">(6) * </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zarefas</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    );
}
