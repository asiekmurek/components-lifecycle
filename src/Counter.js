import React from 'react';
import './App.css'

class Counter extends React.Component {

    render() {
        return (
            <div className="counter">
                {this.props.display}
            </div>
        )

    }
}

export default Counter;