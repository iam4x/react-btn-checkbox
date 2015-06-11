import objectAssign from 'object-assign';
import ButtonComponent from './classes/ButtonComponent';

class Radio extends ButtonComponent {

  _handleClick = ::this._handleClick
  _handleClick(option: string) {
    // Copy `this.props.options` to a new object
    // never modify directly `this.props.options`
    const nextOptions = objectAssign({}, this.props.options);

    // Reset all options to state `false`
    for (let key in nextOptions) nextOptions[key] = false;

    // Set clicked option to `true`
    nextOptions[option] = true;

    return this.props.onChange(nextOptions);
  }

}

export default Radio;
