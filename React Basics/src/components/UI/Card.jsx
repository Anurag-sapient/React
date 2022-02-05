import React from 'react';

import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
    //such that we made a card component and it files the children inside using props.children and prop.classname to get classname for props

    return <div className={classes}>{props.children}</div>
}
export default Card;