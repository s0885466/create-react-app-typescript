import React, {HTMLProps} from 'react';
import {City, OnChange} from '../../modules/Module2';

type Props = Omit<City, 'value'> & Omit<HTMLProps<HTMLInputElement>, 'onChange' |'label'> & {
  onChange?: OnChange,
  checked: boolean
};

export default function CheckBox(props: Props) {
  const {name, label, isChecked, isUnchecked, checked, onChange, disabled} = props;
  const change = () => {
    let newValue;
    if ((isChecked !== undefined) && (isUnchecked !== undefined)) {
      newValue = checked ? isUnchecked : isChecked
    } else {
      newValue = !checked;
    }
    if (onChange) onChange(name, newValue);
  };
  return (
    <div>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={change}
        disabled={disabled}
      />
      {label && <label>{label}</label>}
    </div>
  );
}
