import React from 'react';

const SubNav = (props) => {
    return (
            <li className="header__dropdown">
                <button 
                type="button" 
                className="header__dropdown-title"
                aria-controls="subnav1"
                aria-expanded="true">   
                {props.title}
                </button>

                <ul className="header__dropdown-menu" id="subnav1">
                    <li> {props.items.map( 
                        item => <li><a href="#" className="header__link" key={item}>{item}</a></li>)}
                    </li>
                </ul>
            </li>
    );
}
export default SubNav;