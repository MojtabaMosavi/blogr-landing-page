import React from 'react';

import dektopImage from "../../assets/images/illustration-editor-desktop.svg";
import mobileImage from "../../assets/images/illustration-editor-mobile.svg";

const Feature = () => {
    return (  
        <section className="feature">
            <div className="feature__content-wrapper container">
                <h2 className="feature__title">  Designed for the future</h2>

                <picture className="feature__image-wrapper" >
                    <source srcSet={mobileImage} media="(max-width:43em)" />
                    <source srcSet={dektopImage} media="(max-width:62em)"/>
                    <img src={dektopImage} alt="" className="feature__image" />
                </picture>

                <article className="feature__content">

                    <article className="feature__card">
                        <h3 className="feature__heading">  Introducing an extensible editor</h3>
                        <p className="feature__text">Blogr features an exceedingly intuitive interface which 
                        you focus on one thing: creating content. The editor supports management of multiple
                        s and allows easy manipulation of embeds such as images, videos, and Markdown. 
                        Extensibility with plugins and themes provide easy ways to add functionality or 
                        change the looks of a blog.</p>
                    </article>

                    <article className="feature__card">
                        <h3 className="feature__heading">  Robust content management</h3>
                        <p className="feature__text">  Flexible content management enables users to easily 
                        move through posts. Increase the usability of your blog by adding customized 
                        categories, sections, format, or flow. With this functionality, you’re in full 
                        control.</p>
                    </article>

                    </article>
                </div>
        </section>
    );
}
 
export default Feature;
