import React from 'react';
import './BurgerControls.css';
import BurgerControl from './BurgerControl/BurgerControl';

const controls = [
    {label:'Meat', type:'meat'},
    {label:'Salad', type:'salad'},
    {label:'Cheese', type:'cheese'},
    {label:'Aloo Tikki', type:'alootikki'},
]

const burgerControls = (props) => {
    return(
    <div className="BurgerControls">
        <p>Current Price:<strong>{props.price}₹</strong></p>
        {controls.map(control => {
            return <BurgerControl
                        key={control.label} 
                        label={control.label} 
                        added={()=>props.add(control.type)}
                        deleted={()=>props.delete(control.type)}
                        disabledIngredients={props.disable[control.type]}
                        ingredientPrice={props.ingredientsPrice[control.type]}/>
        })}
        <button 
            className="OrderButton" 
            disabled={!props.purchaseInfo}
            onClick = {props.order}>
            Order Now
        </button>
    </div>
    );
}

export default burgerControls;