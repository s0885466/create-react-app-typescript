import React, {Component} from 'react';
import RadioBlock from '../components/RadioButton/RadioBlock';

export type Family = 'me' | 'wife' | 'father' | 'mother';

export type Option<T extends Family> = {
  value: T,
  label?: string,
  disabled?: boolean,
  checked?: boolean
};

export type Options<T extends Family> = Array<Option<T>>;

type State<T extends Family> = {
  value: T
};

class Module1 extends Component {
  state: State<Family> = {
    value: 'me'
  };

  onChange = (value: Family): void => {
    console.log(value);
    this.setState({
      value: value
    });
  };

  render() {
    const options: Options<Family> = [
      {value: 'me', label: 'Me'},
      {value: 'wife', label: 'My Wife'},
      {value: 'father', label: 'My Father'},
      {value: 'mother', label: 'My Mother'}
    ];

    const name: string = 'family';
    const {value} = this.state;
    return (
      <div>
        <RadioBlock
          inline
          options={options}
          name={name}
          value={value}
          onChange={this.onChange}/>
      </div>
    );
  }
}

export default Module1;
