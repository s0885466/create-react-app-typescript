import React, {ReactNode, useState} from 'react';
import CheckBox from '../components/CheckBox/CheckBox';

type Value = string | number | boolean;

export type City = {
  name: string,
  value: Value,
  label?: string | ReactNode,
  isChecked?: string | number | boolean,
  isUnchecked?: string | number | boolean
}

type Cities = {
  cities: Array<City>
};

export type OnChange = (name: string, value: Value) => void;

export default function Module2() {
  const [state, setState] = useState<Cities>({
    cities: [
      {name: 'Moscow', value: '', label: 'Moscow', isChecked: 'Yes', isUnchecked: 'No'},
      {name: 'Berlin', value: '', label: 'Berlin', isChecked: 'Yes', isUnchecked: 'No'}
    ]
  });

  const onChange: OnChange = (name, value) => {
    const index = state.cities.findIndex(city => city.name === name);
    const cities = [...state.cities];
    cities[index].value = value;
    setState({cities})
  };

  return (
    <div>
      {state.cities.map(({name, value, isChecked, isUnchecked, label}, i) => (
        <div key={i}>
          <CheckBox
            name={name}
            label={label}
            checked={value === isChecked}
            isChecked={isChecked}
            isUnchecked={isUnchecked}
            onChange={onChange}
          />
        </div>
      ))}
    </div>
  );
};