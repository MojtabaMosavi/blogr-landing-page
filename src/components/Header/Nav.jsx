import React from 'react';
import SubNav from "./SubNav";

const Nav = (props) => {
    return (
        <nav className="header__nav" aria-label="navigation">
            <div className="header__nav-content">
                <ul className="header__nav-wrapper">
                        <SubNav 
                        title={"Product"} 
                        items={["Overview","Pricing","Marketplace","Features","Integrations"]}/>



                        <li className="header__dropdown">
                            <button 
                            className="header__dropdown-title"
                            type="button"
                            aria-expanded="true"
                            aria-controls="subnav2">
                            Company
                            </button>

                            <ul className="header__dropdown-menu" id="subnav2">
                                    <li><a href="#" className="header__link">About</a></li>
                                    <li><a href="#" className="header__link"></a>Team</li>
                                    <li><a href="#" className="header__link"></a>Blog</li>
                                    <li><a href="#" className="header__link"></a>Careers</li>
                                </ul>
                        </li>


                        <li className="header__dropdown">
                            <button 
                            className="header__drowpdown-title"
                            type="button"
                            aria-controls="subnav3"
                            aria-expanded="true">
                            Connect
                            </button>

                            <ul className="header__dropfdown-menu" id="subnav3">
                                <li><a href="#" className="header__link">Contact</a></li>
                                <li><a href="#" className="header__link"></a>Newsletter</li>
                                <li><a href="#" className="header__link"></a>LinkedIn</li>
                            </ul>
                            
                            </li>

                    </ul>
            </div>
        </nav>
    );
}
 
export default Nav;