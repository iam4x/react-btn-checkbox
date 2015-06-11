import React, {PropTypes, Component} from 'react';
import classNames from 'classnames';
import map from 'lodash/collection/map';

class ButtonComponent extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    bootstrap: PropTypes.bool
  }

  _getBootstrapClasses = ::this._getBootstrapClasses
  _getBootstrapClasses(option: string) {
    return classNames({
      'btn': this.props.bootstrap,
      'btn-default': this.props.bootstrap,
      'active': this.props.options[option]
    });
  }

  _getGroupClasses = ::this._getGroupClasses
  _getGroupClasses() {
    return classNames('btn-group', {'btn-group': this.props.bootstrap});
  }

  _renderButtons = ::this._renderButtons
  _renderButtons(value: Boolean, option: string) {
    return (
      <label
        key={option}
        className={this._getBootstrapClasses(option)}
        onClick={this._handleClick.bind(this, option)}>
        {option}
      </label>
    );
  }

  render() {
    return (
      <div className='checkbox-btn-container form-group'>
        <label>{this.props.label}</label>
        <div className={this._getGroupClasses()}>
          {
            map(
              this.props.options,
              this._renderButtons
            )
          }
        </div>
      </div>
    );
  }

}

export default ButtonComponent;
