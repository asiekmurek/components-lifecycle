import React from 'react';
import './App.css';
import './Counter';
import Counter from './Counter';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <>
        <Counter display={this.state.count} />
        <button onClick={this.increase}> + </button>
      </>
    )
  }
}
export default App;