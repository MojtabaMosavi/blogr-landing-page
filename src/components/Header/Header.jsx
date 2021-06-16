import React,{useState} from 'react';

import Logo from "./Logo";
import HamburgerNav from "./HamburgerNav";
import Nav from "./Nav";
import Hero from "./Hero";



const Header = () => {
    const [toggle,setToggle] = useState(false)
    return (  
        <header className="header container">
            <div className="header__nav-wrapper">
            <Logo />
            <HamburgerNav 
                toggled={toggle} 
                handleClick = { () => setToggle(toggle => !toggle)}/>
            </div>
            < Nav/>
            <Hero/>
        </header>
    );
}
 
export default Header;