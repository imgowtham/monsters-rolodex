import React from 'react';
import './card-list.styles.css'
import { Card } from '../card/card.components';

export const CardList = props => (
    <div className="card-list">

        {console.log(props)}
        {props.monsters.map(monsterName => (
           <Card key={monsterName.id} monsters={monsterName} />
        ))} 
    </div>
);