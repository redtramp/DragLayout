import React, { Component } from 'react';
import { Button, Input } from 'antd';
class string extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
            <Input value={this.props.value} onChange={this.props.onChange} />
      </>
    );
  }
}

export default string;
