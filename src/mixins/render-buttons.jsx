'use strict';

import React from 'react/addons';

const RenderButtonsMixin = {
  _renderButtons() {
    const markup = [];
    for (let option in this.props.options) {
      let boundClick = this._handleClick.bind(this, option);
      let classes = React.addons.classSet({
        'btn': true,
        'btn-default': true,
        'active': this.props.options[option]
      });
      markup.push(
        <label
          key={option}
          className={classes}
          onClick={boundClick}>
          {option}
        </label>
      );
    }
    return markup;
  }
};

export default RenderButtonsMixin;
