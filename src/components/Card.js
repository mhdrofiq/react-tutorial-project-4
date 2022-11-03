import React from "react"

export default function Card(props){
    return(
        <div className="card-container">
            <img className="card-image" src={props.item.imageurl}/>
            <div className="card-content">
                <div className="card-header">
                    <i className="card-pin" class='fas fa-map-marker-alt'></i>
                    <span className="card-location">{props.item.location}</span>
                    <a className="card-link" href={props.item.googlemaps}>View on Google Maps</a>
                </div>
                <p className="card-title">{props.item.title}</p>
                <p className="card-dates">{props.item.startdate} - {props.item.enddate}</p>
                <p className="card-desc">{props.item.description}</p>
            </div>
        </div>
    )
}