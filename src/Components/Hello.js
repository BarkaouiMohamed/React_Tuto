import React from 'react';

const Hello = () => {
    /*     return(
            <div classNAme='dummyClass'>
                <h1>Hello PEPOLLS</h1>
            </div>
        )
        */
    return React.createElement('div', 
    {id: 'Hello', className:'dummyClass'}, 
    React.createElement('h1', null, 'HELLO PEPOLLS'))
}


export default Hello