import React,{useState} from 'react';

import Logo from "./Logo";
import HamburgerNav from "./HamburgerNav";
import Nav from "./Nav";
import Hero from "./Hero";



const Header = () => {
    const [toggled,setToggle] = useState(false)
    return (  

        <header className="header container">
            <div className="header__content-wrapper">
                <div className="header__nav-wrapper">
                <Logo />
                <HamburgerNav 
                    toggled={toggled} 
                    handleClick = { () => setToggle(toggled => !toggled)}/>
                </div>
                < Nav toggled={toggled}/>
                <Hero/>
            </div>

        </header>
    );
}
 
export default Header;