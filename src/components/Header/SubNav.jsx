import React,{useState} from 'react';

const SubNav = (props) => {
    const [toggled,setToggle] = useState(false);
    return (
            <li className={`header__dropdown${toggled ? '--active' : ''}`}>
                <button 
                type="button" 
                className={`header__dropdown-title${toggled ? '--active' : ''}`}
                aria-controls="subnav1"
                // to communicate state of subnav to screen readers
                aria-expanded={`${toggled ? 'true':'false'}`}
                onClick={() => setToggle(toggled => !toggled)}
                >   

                {props.title}
                
                </button>

                <ul 
                className="header__dropdown-menu" 
                id="subnav1" 
                style={toggled ? {display:"block"} : {display:"none"}}>
                    {props.items.map( 
                        item => <li><a href="/" className="header__dropdown-link" key={item}>{item}</a></li>)}
    
                </ul>
            </li>
    );
}
export default SubNav;