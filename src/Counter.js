import React from 'react';
import './App.css'

class Counter extends React.Component {

    render() {
        return (
            <div>
                {this.props.display}
            </div>
        )

    }
}

export default Counter;