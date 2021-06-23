import React from 'react';


const SubNav = (props) => {
    return (
        <li className="footer__subnav">
            <h4 className="footer__subnav-heading">{props.heading}</h4>
            <ul className="footer__subnav-links">
                {props.items.map(
                    item => <li key={item}> <a href="/" className="footer__subnav-link" >{item}</a></li>
                )}
            </ul>
                    
        </li>
    );
}
 
export default SubNav;