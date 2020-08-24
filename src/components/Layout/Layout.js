import React, {Component} from 'react';
import Aux from './../../hoc/Auxilary';
import './Layout.css';
import Toolbar from './../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false});
    }

    sideDrawerOpenHandler = () => {
        this.setState({showSideDrawer:true});
    }

    render(){
        return(
    <Aux>
        <Toolbar open={this.sideDrawerOpenHandler}/>
        <SideDrawer open={this.state.showSideDrawer}  close={this.sideDrawerClosedHandler} />
        <main className="Content">{this.props.children}</main>
    </Aux>
        )
    }
}

export default Layout;