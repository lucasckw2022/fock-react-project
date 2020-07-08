import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { Input, InputProps } from './Input';

const defaultProps: InputProps = {
  onBlur: jest.fn(),
  onChange: jest.fn(),
  onFocus: jest.fn(),
  placeholder: undefined,
  value: undefined,
};

const initializeWrapper = (props: Partial<InputProps> = {}): ReactWrapper<InputProps> => {
  const componentProps: InputProps = {
    ...defaultProps,
    ...props,
  };
  return mount(<Input {...componentProps} />);
};

describe('Input', () => {
  it('Should pass correct value to input', () => {
    // Given
    const wrapper = initializeWrapper({
      value: 'Hello',
    });
    // When
    const input = wrapper.find('input').first();
    // Then
    expect(input.prop('value')).toBe('Hello');
  });

  describe('onBlur Feature', () => {
    it('Given a blur on the input, Should call onBlur()', () => {
      // Given
      const callback = jest.fn();
      const wrapper = initializeWrapper({
        onBlur: callback,
      });
      // When
      const input = wrapper.find('input').first();
      input.simulate('blur');
      // Then
      expect(callback).toHaveBeenCalled();
    });

    it('Given onBlur is undefined, When there is a blur on the input, Should not throw error', () => {
      // Given
      const wrapper = initializeWrapper({
        onBlur: undefined,
      });
      // When
      const input = wrapper.find('input').first();
      // Then
      expect(() => input.simulate('blur')).not.toThrowError();
    });
  });

  describe('onFocus Feature', () => {
    it('Given a focus on the input, Should call onFocus()', () => {
      // Given
      const callback = jest.fn();
      const wrapper = initializeWrapper({
        onFocus: callback,
      });
      // When
      const input = wrapper.find('input').first();
      input.simulate('focus');
      // Then
      expect(callback).toHaveBeenCalled();
    });

    it('Given onFocus is undefined, When there is a focus on the input, Should not throw error', () => {
      // Given
      const wrapper = initializeWrapper({
        onFocus: undefined,
      });
      // When
      const input = wrapper.find('input').first();
      // Then
      expect(() => input.simulate('focus')).not.toThrowError();
    });
  });

  describe('onChange Feature', () => {
    it('Given a change on the input, Should call onChange()', () => {
      // Given
      const callback = jest.fn();
      const wrapper = initializeWrapper({
        onChange: callback,
      });
      // When
      const input = wrapper.find('input').first();
      input.simulate('change', { target: { value: 5 } });
      // Then
      expect(callback).toHaveBeenCalledWith(5);
    });

    it('Given onChange is undefined, When there is a focus on the input, Should not throw error', () => {
      // Given
      const wrapper = initializeWrapper({
        onChange: undefined,
      });
      // When
      const input = wrapper.find('input').first();
      // Then
      expect(() => input.simulate('change', { target: { value: 5 } })).not.toThrowError();
    });
  });

  describe('Placeholder Feature', () => {
    it('Given placeholder is undefined, Should display empty string as the placeholder', () => {
      // Given
      const wrapper = initializeWrapper({
        placeholder: undefined,
      });
      // When
      const input = wrapper.find('input').first();
      // Then
      expect(input.prop('placeholder')).toEqual('');
    });

    it('Given placeholder is not undefined, Should display placeholder', () => {
      // Given
      const wrapper = initializeWrapper({
        placeholder: 'Hello',
      });
      // When
      const input = wrapper.find('input').first();
      // Then
      expect(input.prop('placeholder')).toBe('Hello');
    });
  });
});
