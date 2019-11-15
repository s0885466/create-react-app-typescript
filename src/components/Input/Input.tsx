import React, {Component, HTMLProps, createRef} from 'react';
import cc from 'classnames';
import {IoMdClose, IoMdCheckmark} from 'react-icons/io';

import './Input.css';
import {InputType} from "../../modules/Module4";

type Props = Omit<HTMLProps<HTMLInputElement>, 'onChange' | 'label'>
  & Omit<InputType, 'validation'>;

class Input extends Component<Props> {

  state = {
    focus: false
  };

  inputRef = createRef<HTMLInputElement>();

  onClear = (name: string) => {
    this.props.onChange(name, '');
    if (this.inputRef.current) this.inputRef.current.focus();
    this.onFocus();
  };

  onFocus = () => {
    this.setState({focus: true})
  };

  onBlur = () => {
    this.setState({focus: false})
  };

  render() {
    const {
      type,
      name,
      value,
      isValid,
      onChange,
      promptMessage,
      errorMessage,
      touched,
      label
    } = this.props;
    const {focus} = this.state;
    return (
      <div>
        <label>{label}</label>
        <div className="input">
          <input
            className={cc(!isValid && !focus && 'error')}
            ref={this.inputRef}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            type={type}
            value={value}
            onChange={e => onChange(name, e.target.value)}
          />
          {promptMessage &&
          <span className={cc('promptMessage', (focus || value) && 'promptMessageFocus')}>{promptMessage}</span>}

          {!isValid && errorMessage && !focus && <div className="errorMessage">{errorMessage}</div>}
          {touched && !isValid && value && !focus &&
          <span
              onClick={() => this.onClear(name)}
              className="close"
          ><IoMdClose/></span>}
          {touched && isValid && <span className='ok'><IoMdCheckmark/></span>}
        </div>
      </div>
    );
  }
}

export default Input;