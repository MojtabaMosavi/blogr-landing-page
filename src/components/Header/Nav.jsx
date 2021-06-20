import React from 'react';
import SubNav from "./SubNav";

const Nav = (props) => {
    return (
        // aria-label for assistive tech
        <nav className={ `header__nav${props.toggled ? '--active' : ''}` }aria-label="navigation">
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
                <a href="/" className="header__btn btn btn--blue-text">Login</a>
                <a href="/" className="header__btn btn btn--gradient-bg">  Sign Up</a>
            </div>
        </nav>
    );
}
 
export default Nav;