import React from 'react';
import logoimage from './../../assets/images/burger-logo.png';
import './Logo.css';

const logo = (props) => {
 return (
 <div className="Logo" style={{height:props.Lheight}}>
     <img src={logoimage} alt="MyBurger" />
 </div>
 );
}

export default logo;