import React from 'react';


import Feature from "./Feature";
import Art from "./Art";
import Feature2 from "./Feature2";


const Main = () => {
    return (
        <main className="main ">
            <div className="main__content-wrapper">
                <Feature/>
                <Art />
                <Feature2 />
            </div>
        </main>
    );
}
 
export default Main;