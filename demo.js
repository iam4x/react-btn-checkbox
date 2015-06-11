import React, {Component} from 'react';
import {Checkbox, Radio} from './src/index';

import './src/styles/styles.scss';

class Demo extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      checkboxes: {
        'First': false,
        'Second': true,
        'Third': false
      },
      radio: {
        'First': false,
        'Second': true,
        'Third': false
      }
    };
  }

  _handleCheckboxes = ::this._handleCheckboxes
  _handleCheckboxes(checkboxes) {
    return this.setState({checkboxes});
  }

  _handleRadio = ::this._handleRadio
  _handleRadio(radio) {
    return this.setState({radio});
  }

  render() {
    return (
      <div>
        <Checkbox
          label='`Checkbox'
          options={this.state.checkboxes}
          onChange={this._handleCheckboxes} />
        <pre>{JSON.stringify(this.state.checkboxes)}</pre>
        <Radio
          ref='radio'
          label='Radio & Uncheckable Radio'
          options={this.state.radio}
          onChange={this._handleRadio} />
        <pre>{JSON.stringify(this.state.radio)}</pre>
      </div>
    );
  }

}

React.render(<Demo />, document.body);
