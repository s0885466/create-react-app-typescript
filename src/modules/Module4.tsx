import React, {Component} from 'react';
import Input from '../components/Input/Input';

export type Type = 'text' | 'password' | 'email' | 'tel';

export type InputType = {
  name: string,
  label: string | React.ReactNode,
  type: Type,
  isValid: boolean,
  touched: boolean,
  promptMessage: string,
  errorMessage: string,
  value: string,
  onChange: (name: string, value: string) => void,
  validation: Validation
}

type Validation = {
  [key: string]: string | number | boolean
}

type State = {
  inputs: {
    [key: string]: InputType
  }
}

function validate(value: string, validation: Validation) {
  let isValid = true;

  if (validation.required) {
    isValid = isValid && Boolean(value.trim());
  }

  if (validation.number) {
    isValid = isValid && /^-?[\d.]+(?:e-?\d+)?$/.test(value.trim());
  }

  if (validation.minLength) {
    isValid = isValid && value.trim().length > validation.minLength;
  }

  return isValid;
}

class Module4 extends Component<{}, State> {

  readonly state: State = {
    inputs: {
      name: {
        name: 'name',
        label: 'Имя',
        type: 'text',
        isValid: true,
        touched: false,
        promptMessage: 'Укажите ваше ФИО',
        errorMessage: 'Неверное ФИО',
        value: '',
        onChange: this.onChangeHandler.bind(this),
        validation: {
          required: true,
          minLength: 6
        }
      },
      phone: {
        name: 'phone',
        label: 'Телефон',
        type: 'tel',
        isValid: true,
        touched: false,
        promptMessage: 'Укажите ваш телефон',
        errorMessage: 'Неверный телефон',
        value: '',
        onChange: this.onChangeHandler.bind(this),
        validation: {
          required: true,
          minLength: 8,
          number: true
        }
      },
    }
  };

  onChangeHandler(name: string, value: string) {
    const inputs = {...this.state.inputs};
    inputs[name].value = value;
    inputs[name].touched = true;
    inputs[name].isValid = validate(value, inputs[name].validation);
    this.setState({inputs});
  }

  render() {
    const {inputs} = this.state;
    return (
      <div>
        {Object.values(inputs).map((input, i) => (
          <Input
            key={i}
            name={input.name}
            label={input.label}
            type={input.type}
            isValid={input.isValid}
            touched={input.touched}
            promptMessage={input.promptMessage}
            errorMessage={input.errorMessage}
            value={input.value}
            onChange={input.onChange}
          />
        ))}
      </div>
    );
  }
}

export default Module4;