import React from 'react';

class ClassComponent extends React.Component {
    render() {
        return (
            <div className="class-component">
                <h1>This is created using class component</h1>
                <h3>This is done using external css</h3>
                <h3 style={{color: 'blue'}}>This is done using inline css</h3>
            </div>
        );
    }
}

export default ClassComponent;