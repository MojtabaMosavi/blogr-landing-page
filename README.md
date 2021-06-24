
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./design/desktop-design.jpg)


**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Live Site URL: [https://mojtabamosavi.github.io/blogr-landing-page](https://mojtabamosavi.github.io/blogr-landing-page)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- Sass
- BEM


### What I learned

1- I improved my knowledge of how to incorporate npm in project.

2- I learned how to host a create-react-app on github-pages and to build production version of the app for batter perfomance. To achieve this I used the npm module gh-pages which makes much more easier to deployment.

3- Writing resuable components and useStata hook.  
  Throughtout this project I focused on creating reusable components and the following component is a code illustration of it. The following components is the mobile navigation    of the site and the way it is implements allows you reuse it in any other part of the project or modifying the navigation links only through modifying the items list.
```jsx 
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
```
4- How to implement a semenantic and accessible dropdown menu 
  
  There a few thing to highlight:
    1- The usage of aria-controls to create a causea and effect relationship which indicates that the button is controlling the behavior of the dropdown menu.
    2. aria-expanded is used to indicate the state of the element.

```jsx
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
                        item => <li key={item}><a href="/" className="header__dropdown-link" >{item}</a></li>)}
    
                </ul>
            </li>
    );
}
}
```
5- How to structure a react project, in this project I used the 7-1 sass architecture. 


### Continued development

1- Gettting more familiar with npm

2- Improving my understanding of BEM, for instance identifying situation where starting a context is not necessary.

3- Learning about some of more advanced operations of Git for example branching.

4- Even though I used 7-1 sass architecture for this project which enables you to write modular code, there is room for improvment when is comes to the way structuring the styles and jsx because in a larger project the current structure can get quite messy.

5- The way I comment code, at momment I used to write only short comments that fulfill their purpose but there is room for improvment.

6- Doing this project I come to realize the cross-browser testing i really important aspect of a project and something that I need to get in habit of doing in every project.

### Useful resources

- [Example resource 1](https://tink.uk/using-the-aria-controls-attribute/) - A simple guide on the behavior of aria-controls.
- [Example resource 2](https://create-react-app.dev/docs/deployment/#github-pages-https-pagesgithubcom) -From this I learned how to poblish a create-rect-app on github pages.



