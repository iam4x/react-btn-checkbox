'use strict';

var React = require('react');

var ReactBtnCheckbox = require('./src/index');
var Checkbox = ReactBtnCheckbox.Checkbox;
var Radio = ReactBtnCheckbox.Radio;

require('./src/styles/styles.scss');

var Demo = React.createClass({
  getInitialState() {
    return {
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
  },
  handleCheckboxes(checkboxes) {
    this.setState({checkboxes});
  },
  handleRadio(radio) {
    this.setState({radio});
  },
  render() {
    return (
      <div>
        <Checkbox
          label={`Checkbox`}
          options={this.state.checkboxes}
          onChange={this.handleCheckboxes} />
        <pre>{JSON.stringify(this.state.checkboxes)}</pre>
        <Radio
          ref='radio'
          label={`Radio & Uncheckable Radio`}
          options={this.state.radio}
          onChange={this.handleRadio} />
        <pre>{JSON.stringify(this.state.radio)}</pre>
      </div>
    );
  }
});

React.render(<Demo />, document.body);
