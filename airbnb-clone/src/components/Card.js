import React from "react";
import Star from "../images/star.png";

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="card" />
            <div className="card--stats">
                <img className="star--icon" src={Star} alt="star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) * </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    );
}

// 3h50m