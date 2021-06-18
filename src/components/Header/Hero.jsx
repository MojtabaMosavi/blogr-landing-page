import React from 'react';

const Hero = () => {
    return (
        <section className="header__hero">
            <h1 className="header__heading">  A modern publishing platform</h1>
            <p className="header__text">  Grow your audience and build your online brand</p>
            <div className="header__cta-wrapper">
                <button className="header__btn btn btn--white-bg">  Start for Free</button>
                <button className="header__btn btn">  Learn More</button>
            </div>
        </section>
    );
}
 
export default Hero;