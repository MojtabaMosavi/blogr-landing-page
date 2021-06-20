import React,{useState} from 'react';

import Logo from "./Logo";
import HamburgerNav from "./HamburgerNav";
import Nav from "./Nav";
import Hero from "./Hero";



const Header = () => {
    const [toggled,setToggle] = useState(false)
    return (  

        <header className="header ">
            <div className="header__content-wrapper container">
                <div className="header__nav-wrapper">
                <Logo />
                <HamburgerNav 
                    toggled={toggled} 
                    handleClick = { () => setToggle(toggled => !toggled)}/>
                
                < Nav toggled={toggled}/>
                </div>
                <Hero/>
            </div>

        </header>
    );
}
 
export default Header;