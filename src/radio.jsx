'use strict';

import React from 'react';

import RenderButtonsMixin from './mixins/render-buttons';

export default React.createClass({
  mixins: [RenderButtonsMixin],
  getValue() {
    let value;
    for (let key in this.props.options) {
      if (this.props.options[key]) {
        value = key;
      }
    }
    return value;
  },
  _handleClick(option) {
    let nextOptions = {};
    for (let key in this.props.options) {
      nextOptions[key] = false;
    }
    nextOptions[option] = true;
    return this.props.onChange(nextOptions);
  },
  render() {
    return (
      <div className='radio-btn-container form-group'>
        <label>{this.props.label}</label>
        <div className='btn-group'>
          {this._renderButtons(this.props.options)}
        </div>
      </div>
    );
  }
});
