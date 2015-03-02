'use strict';

var React = require('react'),
    ReactBtnCheckbox = require('./src/index'),
    SubComponent = ReactBtnCheckbox.SubComponent,
    AnotherSubComponent = ReactBtnCheckbox.AnotherSubComponent;

var DemoApp = React.createClass({
  render: function() {
    return (
      <div>
        <SubComponent />
        <AnotherSubComponent />
      </div>
    );
  }
});

React.render(<DemoApp />, document.body);
