import React from 'react';
import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from './../../UI/Backdrop/Backdrop';
import Aux from './../../../hoc/Auxilary';

const sideDrawer = (props) => {
    let showSide = "Close"
    if(props.open){
        showSide="Open"
    }
    return (
        <Aux>
            <Backdrop show={props.open} canceled={props.close}/>
            <div className={["SideDrawer",showSide].join(' ')}>
                <Logo Lheight="11%" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;