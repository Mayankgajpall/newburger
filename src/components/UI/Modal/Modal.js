import React, {Component} from 'react';
import './Modal.css';
import Backdrop from './../Backdrop/Backdrop';
import Aux from './../../../hoc/Auxilary';

class Modal extends Component{
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate(){
        console.log("[Modal] updated")
    }

    render(){
        return(
            <Aux>
            <Backdrop show={this.props.show} canceled={this.props.cancel}/>
            <div 
                className="Modal"
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                {this.props.children}
            </div>
        </Aux>
        );
    }
}

export default Modal;