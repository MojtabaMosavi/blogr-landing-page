import React from 'react';

import logo from "../../assets/images/logo.svg"

const Logo = () => {
    return (
        <a href= "/" className="header__logo">
            <img src={logo} alt="" />
        </a>
      );
}
 
export default Logo