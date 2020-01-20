import React, { Component } from 'react';
import StateInput from './StateInput';

class HelloWorld extends Component {

  constructor(props) {
    super(props);

    console.log(props, this.props);

    this.state = {
      name: 'Hello World',
      txt: this.props.txt
    };
  }

  render() {
    const result = 4;
    const style = {
      color: '#f00000',
      fontSize: 16,
      backgroundColor: '#000'
    };

    return (
      <div className="my-class-from-react">
        <h1 style={style}>{this.state.txt}</h1>

        <h3>Welcome: {this.state.name}!</h3>

        <StateInput />

        <h4>Result: { result === 2 * 2 ? <div><ul><li>True</li></ul></div> : 'FALSE' }</h4>
      </div>
    )
  }
}

export default HelloWorld;
