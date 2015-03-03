# React Button Checkbox

> Display your input checkbox and radio like buttons.
>
> Two components that can make a group of buttons behave like a set of checkboxes, radio buttons, or a hybrid where radio buttons can be unchecked.
>
> Like [ui.bootstrap.buttons](http://angular-ui.github.io/bootstrap/#/buttons) as a React Component.

## Setup

You can import the lib with as AMD modules, CommonJS modules as a global JS script.

### CommonJS / AMD

```
$ npm install react-btn-checkbox

var ReactBtn = require('react-btn-checkbox');
var Checkbox = ReactBtn.Checkbox;
var Radio = ReactBtn.Radio;

// or
var Checkbox = require('react-btn-checkbox').Checkbox;
var Radio = require('react-btn-checkbox').Radio;

// or with ES6
import {Checkbox, Radio} from 'react-btn-checkbox';</code></pre>
```

### Browser globals

The package contains two files `dist/react-btn-checkbox.min.js` and `dist/react-btn-checkbox.js` with all components exported in the `window.ReactBtn` object.

```
<script src='dist/react-btn-checkbox.min.js'></script>

<script type='text/jsx'>
  var Checkbox = ReactBtn.Checkbox;
  var Radio = ReactBtn.Radio;

  var component = React.createClass({...});
  React.render(...);
</script>
```

### Styles

Don't forget to include stylsheets from `dist/react-btn-checkbox.css` or `dist/react-btn-checkbox.min.css`.

```
<link rel='stylesheet' href='dist/react-btn-checkbox.min.css'>
```

## Usage

### Checkbox

```
import {Checkbox} from 'react-btn-checkbox';

export default React.createClass({
  getInitialState() {
    return {
      'First': false,
      'Second': true,
      'Third': false
    }
  },
  render() {
    return (
      <Checkbox
        label='Checkbox'
        options={this.state}
        onChange={this.setState.bind(this)} />
    );
  }
});
```

### Radio

```
import {Radio} from 'react-btn-checkbox';

export default React.createClass({
  getInitialState() {
    return {
      'First': false,
      'Second': true,
      'Third': false
    }
  },
  render() {
    return (
      <Radio
        label='Radio'
        options={this.state}
        onChange={this.setState.bind(this)} />
    );
  }
});
```

### With bootstrap

You can apply button group bootstrap styles if they are included, and remove default styles from `react-btn-checkbox`.

```
<Checkbox
  label='Checkbox with bootstrap'
  options={...}
  onChange={...}
  bootstrap />
```

## Development

### Installation

* Install dependancies: `$ npm install`
* Dev: `$ gulp serve && open http://localhost:3000`
* Build: `$ gulp build`

### Contribute

Follow `CONTRIBUTE.md`
