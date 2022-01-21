import React from "react";
import './card.css';








const Card = () => {
    return(
        <div>
            <div className="col-3">
                <div className="card cardWidth">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png"
                        className="card-img-top cardImg" alt="unown"/>
                    <div className="card-body">
                        <h5 className="card-title">unown</h5>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                            Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;