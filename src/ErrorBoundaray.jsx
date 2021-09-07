import React, { Component } from 'react';

export default class ErrorBoundaray extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1> something went wrong!</h1>;
    } else {
      return <div>{this.props.children} </div>;
    }
  }
}
