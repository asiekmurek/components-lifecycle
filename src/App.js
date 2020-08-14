import React from 'react';
import ReactDom from 'react-dom';
// import {unmountComponentAtNode, destination} from 'react-dom';
import './App.css';
import './Counter';
import Counter from './Counter';

class App extends React.Component {
  constructor(props) {
    super(props);

    console.log("konstruktor: domyślny stan")

    this.state = {
      count: 0
    };
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  // DEPRECATED
  // UNSAFE_componentWillUpdate
  componentWillUpdate(newProps, newState) {
    console.log("componentWillUpdate(): komponent zostanie zaktualizowany")
    console.count("ComponentWillUpdate(): count -> ");
  }

  componentDidUpdate(currentProps, currentState) {
    console.log("componentDidUpdate(): komponent zaktualizowany")
    console.count("componentDidUpdate(): count -> ")
  }

  // DEPRECATED
  // UNSAFE_componentWillMount
  componentWillMount() {
    console.log("componentWillMount(): komponent zostanie zamontowany")
    console.count("componentWillMount(): count -> ")
  }

  componentDidMount() {
    console.log("componentDidMount(): komponent zamontowany")
    console.count("componentDidMount(): count -> ")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount(): komponent zostanie usuniety z modelu DOM!")
    console.count("componentWillUnmount(): count -> ")
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate(): czy komponent trzeba zaktualizowac?")
    if (newState.count > 3) {
      console.log("shouldComponentUpdate(): komponent trzeba zaktualizowac!")
      return true;
    } else {
      // ReactDom.unmountComponentAtNode(destination)
      console.log("shouldComponentUpdate(): komponentu nie trzeba aktualizowac")
      return false;
    }
  }

  // DEPRECATED
  // UNSAFE_componentWillReceiveProps
  componentWillReceiveProps(newProps) {
    console.log("componentWillReceiveProps(): komponent uzyska nowe propsy")
  }

  render() {
    console.count("render: ")
    return (
      <>
        <span className="title"> {this.props.title} </span>
        <div className="counterBox">
          <button className="plusBtn" onClick={this.increase}> + </button>
          <Counter display={this.state.count} />
        </div>
        <span className="addInfo"> {this.props.additionalInfo} </span>
      </>
    )
  }
}
console.log("default props: domyślne propsy: ")
App.defaultProps = {
  title: "Open console in dev tools and click on plus button",
  additionalInfo: "* Please click more than 3 times"
}
export default App;