'use strict';

var React = require('react');
var ReactBtnCheckbox = require('./src/index');
var Checkbox = ReactBtnCheckbox.Checkbox;
var Radio = ReactBtnCheckbox.Radio;

var Demo = React.createClass({
  render: function () {
    return (
      <div>
        <Checkbox />
        <Radio />
      </div>
    );
  }
});

React.render(<Demo />, document.body);
