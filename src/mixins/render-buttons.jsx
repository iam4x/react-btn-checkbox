'use strict';

import React from 'react/addons';

export default {
  _getBootstrapClasses(option) {
    return React.addons.classSet({
      'btn': this.props.bootstrap && true,
      'btn-default': this.props.bootstrap,
      'active': this.props.options[option]
    });
  },
  _getGroupClasses() {
    return React.addons.classSet({
      'btn-group': true,
      'bootstrap': this.props.bootstrap
    });
  },
  _renderButtons() {
    const markup = [];
    for (let option in this.props.options) {
      markup.push(
        <label
          key={option}
          className={this._getBootstrapClasses(option)}
          onClick={this._handleClick.bind(this, option)}>
          {option}
        </label>
      );
    }
    return markup;
  }
};
