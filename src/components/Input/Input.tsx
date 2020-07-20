import * as React from 'react';

export interface InputProps {
  onBlur?: () => void;
  onChange?: (value?: string) => void;
  onFocus?: () => void;
  placeholder?: string;
  value?: string;
}

export const Input: React.FC<InputProps> = ({ placeholder, value, onChange, onFocus, onBlur }) => {
  const onValueChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event.target.value);
      }
    },
    [onChange],
  );

  return (
    <input
      className="form-control"
      onBlur={onBlur}
      onChange={onValueChange}
      onFocus={onFocus}
      placeholder={placeholder ? placeholder : ""}
      type="text"
      value={value}
    />
  );
};
