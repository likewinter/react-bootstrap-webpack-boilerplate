import React from 'react';

class HelloMessage extends React.Component {

    render() {
        return (
            <div className="jumbotron">
                <h1>Hello, {this.props.name}!</h1>
                <p>Boilerplate is ready to develop!</p>
            </div>
        );
    }

};

export default HelloMessage;
