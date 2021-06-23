import React from 'react';

import SubNav from "./SubNav";
import Logo from "../../assets/images/logo.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content-wrapper">
                <a href="" className="footer__logo">
                    <img src={Logo} alt="" />
                </a>

                <nav className="footer__nav">

                    <ul className="footer__nav-wrapper">
                        <SubNav heading = {"Product"} 
                                items = { ["Overview","Pricing","Marketplace","Features","Integrations"]}/>

                        <SubNav heading = {"Company"} 
                                items = { ["About","Team","Blog","Careers"]}/> 

                        <SubNav heading = {"Connect"} 
                                items = { ["Contact","Newsletter","LinkedIn",]}/>         
                    </ul>
                </nav>

            </div>

        </footer>
    );
}
 
export default Footer;