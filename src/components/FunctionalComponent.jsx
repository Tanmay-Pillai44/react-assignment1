import React from 'react';

const FunctionalComponent = () => {
    return (
        <div className='functional-component'>
            <h1>This is created using functional component</h1>
            <h3>This is done using external css</h3>
            <h3 style={{color: 'blue'}}>This is done using inline css</h3>
        </div>
    );
}

export default FunctionalComponent;