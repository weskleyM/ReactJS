import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.img}`} alt="card" />
            <div className="card--stats">
                <img className="star--icon" src="../images/star.png" alt="star" />
                <span>{props.rating}</span>
                <span className="gray">(6) * </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zarefas</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    );
}
