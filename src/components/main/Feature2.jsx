import React from 'react';

import dektopImage from "../../assets/images/illustration-laptop-desktop.svg";
import mobileImage from "../../assets/images/illustration-laptop-mobile.svg";

const Feature2 = () => {
    return (  
        <section className="feature feature--position">
            <div className="feature__content-wrapper feature__content-wrapper--reverse container">

                <picture className="feature__image-wrapper  feature__image-wrapper--position" >
                    <source srcSet={mobileImage} media="(max-width:43em)" />
                    <source srcSet={dektopImage} media="(max-width:62em)"/>
                    <img src={dektopImage} alt="" className="feature__image feature__image--size" />
                </picture>

                <article className="feature__content  feature__content--position">

                    <article className="feature__card">
                        <h3 className="feature__heading">    Free, open, simple</h3>
                        <p className="feature__text">  Blogr is a free and open source application backed
                         by a large community of helpful developers. It supports features such as code 
                         syntax highlighting, RSS feeds, social media integration, third-party commenting
                          tools, and works seamlessly with Google Analytics. The architecture is clean 
                          and is relatively easy to learn.</p>
                    </article>

                    <article className="feature__card">
                        <h3 className="feature__heading">    Powerful tooling</h3>
                        <p className="feature__text">Batteries included. We built a simple and 
                        straightforward CLI tool that makes customization and deployment a breeze, 
                        butcapable of producing even the most complicated sites. 
                        control.</p>
                    </article>

                    </article>
                </div>
        </section>
    );
}
 
export default Feature2;
