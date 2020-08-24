import React from 'react';
import './BurgerControl.css';

const burgerControl = (props) => {
    const styles = {
        paddingLeft:'7%'
    };

    return (
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button className="Less" onClick={props.deleted} disabled={props.disabledIngredients}>Less</button>
            <button className="More" onClick={props.added}>More</button>
            <div style={styles}>Cost:<strong>{props.ingredientPrice}₹</strong></div>
        </div>
    );
}

export default burgerControl;