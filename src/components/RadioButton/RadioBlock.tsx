import React, {Component} from 'react';
import cc from 'classnames';

import {Family, Options} from "../../modules/Module1";
import Radiobutton from './RadioButton';
import './RadioBlock.css';

export type Props<T extends Family> = {
  value: T,
  inline?: boolean,
  name: string,
  options: Options<T>,
  onChange?: (value: T) => void
};

class RadioBlock extends Component<Props<Family>> {
  name: string = `${this.props.name} ${Math.random().toString().slice(-8)}`;

  render() {
    const {options, onChange, inline} = this.props;
    return (
      <div className={cc('radio-buttons', inline && 'inline-radio-buttons')}>
        {options.map((opt, i) => (
          <div key={i}>
            <Radiobutton
              name={this.name}
              value={opt.value}
              label={opt.label}
              checked={this.props.value === opt.value}
              disabled={opt.disabled}
              onChange={onChange}/>
          </div>
        ))}
      </div>
    );
  }
}

export default RadioBlock;