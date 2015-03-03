'use strict';

var React = require('react');
var ReactBtnCheckbox = require('./src/index');
var Checkbox = ReactBtnCheckbox.Checkbox;
var Radio = ReactBtnCheckbox.Radio;

var Demo = React.createClass({
  getInitialState() {
    return {
      checkboxes: {
        'First': false,
        'Second': true,
        'Third': false
      }
    };
  },
  handleCheckboxes(checkboxes) {
    this.setState({checkboxes});
  },
  render() {
    return (
      <div>
        <Checkbox
          label={`Checkbox`}
          options={this.state.checkboxes}
          onChange={this.handleCheckboxes} />
        <pre>{JSON.stringify(this.state.checkboxes)}</pre>
        <Radio />
      </div>
    );
  }
});

React.render(<Demo />, document.body);
