import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';

const burger = (props) => {
    let changedIngredients = Object.keys(props.ingredients).map(igkey => {
        return [...Array(props.ingredients[igkey])].map((_,i) => {
            return <BurgerIngredient key={igkey+i} type={igkey} />
        });
    })
    .reduce((arr,el) => {
        return arr.concat(el)
    }, []);

    if(changedIngredients.length === 0)
        changedIngredients = <p>Please start adding ingredients!</p>

    return(
    <div className="Burger">
        <BurgerIngredient type="bread-top" />
        {changedIngredients}
        <BurgerIngredient type="bread-bottom" />
    </div>
    );
}

export default burger;