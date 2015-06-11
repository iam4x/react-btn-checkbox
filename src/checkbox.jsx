import objectAssign from 'object-assign';
import ButtonComponent from './classes/ButtonComponent';

class Checkbox extends ButtonComponent {

  _handleClick = ::this._handleClick
  _handleClick(option: string) {
    this.props.onChange(
      objectAssign(
        this.props.options,
        {
          [option]: !this.props.options[option]
        }
      )
    );
  }

}

export default Checkbox;
