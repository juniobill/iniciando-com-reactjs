import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropsValidation extends Component {
  constructor(props) {
    super(props);

    console.log(typeof this.props.age)
  }

  render() {
    return (
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.age}</li>
        <li>{this.props.height}</li>
      </ul>
    );
  }
}

PropsValidation.propTypes = {
  name: PropTypes.string,
  fullname: PropTypes.string.isRequired,
  age: PropTypes.number,
  height: PropTypes.number,
  func: PropTypes.func,
  obj: PropTypes.object,
  arr: PropTypes.array
};

PropsValidation.defaultProps = {
  age: 28,
  height: 1.82
};

export default PropsValidation;
