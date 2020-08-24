import React, {Component} from 'react';
import Aux from './../../../hoc/Auxilary';
import Button from './../../UI/Button/Button';

class OrderSummary extends Component{
    componentWillUpdate (){
        console.log("[Order Summary] updated");
    }

    render(){
        const ingredientList = Object.keys(this.props.ingredients).map(igkey => {
            return <li key={igkey}><span style={{textTransform:'capitalize'}}>{igkey} </span> : {this.props.ingredients[igkey]}</li>
        })
        return(
            <Aux>
                <h3>Your Order</h3>
                <p>Your Delicious Burger have following ingredients:</p>
                <ul>
                    {ingredientList}
                </ul>
                <p><strong>Total Price: {this.props.orderPrice}</strong></p>
                <p>Continue to checkout?</p>
                <Button type="Success" clicked={this.props.continueButton}>CONTINUE</Button>
                <Button type="Danger" clicked={this.props.cancelButton}>CANCEL</Button>
            </Aux>
        );
    } 
}

export default OrderSummary;