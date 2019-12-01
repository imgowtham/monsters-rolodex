import React from 'react'
import './card.styles.css';

export const Card = props => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monsters.id}?set=set3&size=180x180`} alt="monster"/>
         <h2>{props.monsters.name}</h2>
         <span>{props.monsters.email}</span>
    </div>
)