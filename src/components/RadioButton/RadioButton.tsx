import React, {Component, HTMLProps, ReactNode} from 'react';
import {Family} from '../../modules/Module1';

type Props<T extends Family> = Omit<HTMLProps<HTMLInputElement>, 'onChange'| 'value'| 'label'> & {
  name: string,
  value: T,
  label?: string | ReactNode,
  checked?: boolean,
  disabled?: boolean,
  onChange?: (value: T) => void
}

class Radiobutton extends Component<Props<Family>> {
  onChange = (): void => {
    const {onChange, value} = this.props;
    if (onChange) onChange(value);
  };

  render() {
    const {value, label, disabled, checked} = this.props;
    return (
      <div>
        <input
          type="radio"
          value={value.toString()}
          checked={checked}
          disabled={disabled}
          onChange={this.onChange}
        />
        <label>{label}</label>
      </div>

    );
  }
}

export default Radiobutton;