import React,{Component} from 'react';
import Aux from './../../hoc/Auxilary';
import Burger from './../../components/Burger/Burger';
import BurgerControls from './../../components/Burger/BurgerControls/BurgerControls';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    meat:50,
    alootikki:40,
    salad:25,
    cheese:30
}

class BurgerBuilder extends Component{

    state = {
        ingredients: {
            salad:0,
            cheese:0,
            meat:0,
            alootikki:0,
            
        },

        totalPrice: 30,
        purchasable: false,
        purchasing: false,
    }

    checkOrderButton = (tingredients) =>{
        const sum = Object.keys(tingredients).map(inkey => {return tingredients[inkey];})
                    .reduce((sum,el) => {
                        return sum+el;
                    },0);
        this.setState({purchasable:sum>0})
    }

    AddingHandler = (type) =>{
        const tempIngredients = {...this.state.ingredients};
        tempIngredients[type]++;

        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + INGREDIENT_PRICES[type];

        this.setState({
            ingredients:tempIngredients,
            totalPrice:updatedPrice
        });
        this.checkOrderButton(tempIngredients);
    }

    DeletingHandler = (type) => {
        if(this.state.ingredients[type] <=0 )
            return;
        const tempIngredients = {...this.state.ingredients};
        tempIngredients[type]--;

        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - INGREDIENT_PRICES[type];

        this.setState({
            ingredients:tempIngredients,
            totalPrice:updatedPrice
        });
        this.checkOrderButton(tempIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing:true});
    }

    purchaseCancel = () => {
        this.setState({purchasing:false});
    }

    purchaseContinue = () => {
        alert("Order Accepted");
    }

    render(){
        //const purchase = this.state.totalPrice > 30;    Shortcut to make Order button disabled
        const disabledIngredients = {...this.state.ingredients};
        for(let key in disabledIngredients){
            disabledIngredients[key] = disabledIngredients[key] <=0;
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} cancel={this.purchaseCancel}>
                    <OrderSummary 
                        ingredients={this.state.ingredients} 
                        cancelButton={this.purchaseCancel}
                        continueButton={this.purchaseContinue}
                        orderPrice={this.state.totalPrice} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls  
                    add={this.AddingHandler} 
                    delete={this.DeletingHandler} 
                    disable={disabledIngredients}
                    ingredientsPrice={INGREDIENT_PRICES}
                    price={this.state.totalPrice}
                    purchaseInfo={this.state.purchasable}
                    order={this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;