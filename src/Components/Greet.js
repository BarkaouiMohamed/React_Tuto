import React from 'react';

/* function Greet(){
    return <h1>Hello Pepolls</h1>
} */

export const Greet = props=> {
    const {name, heroName} =props
    return (
        <div>
            <h1>Hello {name} AKA {heroName}</h1>  {/* when we use export const we should import it withe the sam name */}
            {/* {props.children} */}
        </div>
    )
     
}
 export default Greet;