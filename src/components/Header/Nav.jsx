import React from 'react';
import SubNav from "./SubNav";

const Nav = (props) => {
    return (
        <nav className="header__nav" aria-label="navigation">
            <ul className="header__links-wrapper">
                    <SubNav title={"Product"} 
                            items={["Overview","Pricing","Marketplace","Features","Integrations"]}/>
                    <SubNav title={"Company"} 
                            items={["About","Team","Blog","Cereer"]}/>

                    <SubNav title={"Connect"} 
                            items={["Contact","Newsletter","LinkedIn"]}/>

            </ul>
            <hr className="header__divider divider" />
            <div className="header__btn-wrapper">
                <a href="/" className="header__btn btn">Login</a>
                <a href="/" className="header__btn btn">  Sign Up</a>
            </div>
        </nav>
    );
}
 
export default Nav;