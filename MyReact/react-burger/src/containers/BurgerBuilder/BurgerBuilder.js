import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Aux';

export class BurgerBuilder extends Component {

    state = {
        ingredients:{
            salad:1,
            cheese:10,
            meat:10,
            bacon:10
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;
