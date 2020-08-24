import React from 'react';
import './Toolbar.css';
import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import DrawerToggle from './../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
    return(
    <header className="Toolbar">
        <DrawerToggle click={props.open} />
        <Logo Lhieght="80%" />
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
    );
}

export default toolbar;