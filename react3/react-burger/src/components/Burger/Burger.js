import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

export default function Burger(props) {
    const transIngredients = Object.keys(props.ingredients)
            .map(igKey => {
                return [...Array(props.ingredients[igKey])]
                    .map((_,i)=>{
                        return <BurgerIngredient key={igKey+i} type={igKey}/>;
                    });
            });
     
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}
