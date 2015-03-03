'use strict';

import React from 'react';
import objectAssign from 'object-assign';
import RenderButtonsMixin from './mixins/render-buttons';

export default React.createClass({
  mixins: [RenderButtonsMixin],
  _handleClick(option) {
    this.props.onChange(
      objectAssign(
        this.props.options,
        {
          [option]: !this.props.options[option]
        }
      )
    );
  },
  render() {
    return (
      <div className='checkbox-btn-container form-group'>
        <label>{this.props.label}</label>
        <div className='btn-group'>
          {this._renderButtons(this.props.options)}
        </div>
      </div>
    );
  }
});
