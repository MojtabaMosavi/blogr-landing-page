import React from 'react';

const HamburgerNav = (props) => {
    return (  
        <button className={`header__hamburger-menu hamburger-menu 
                ${props.toggled ? 'hamburger-menu--active': '' }`}
                aria-label="menu" 
                type="button" 
                aria-controls="navigation"
                onClick = {props.handleClick}
                >
            <span className="hamburger-menu__bar hamburger-menu__bar--top" aria-hidden="true"></span>
            <span className="hamburger-menu__bar hamburger-menu__bar--middle" aria-hidden="true"></span>
            <span className="hamburger-menu__bar hamburger-menu__bar--bottom" aria-hidden="true"></span>
        </button>

    );
}
 
export default HamburgerNav;