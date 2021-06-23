import React from 'react';

import mobileImage from "../../assets/images/illustration-phones.svg"

const Art = () => {
    return (  
        <section className="art">
            <div className="art__c-wrapper container">
                <div className="art__image-wrapper" >
                    <img src={mobileImage} alt="" className="art__image" />
                </div>
                <article className="art__content-wrapper">
                    <h2 className="art__heading">  State of the Art Infrastructure</h2>
                    <p className="art__text">  With reliability and speed in mind, worldwide data 
                    centers provide the backbone for ultra-fast connectivity. This ensures your site 
                    will load instantly, no matter where your readers are, keeping your site 
                    competitive.</p>
                </article>
            </div>
        </section>
    );
}
 
export default Art;