import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { BootstrapColors } from '../../models/Bootstrap.model';
import { WithAction, WithActionProps } from './WithAction';

const defaultProps: WithActionProps = {
  color: undefined,
  isDisabled: undefined,
  onTrigger: jest.fn(),
  outline: undefined,
  text: '',
};

const initializeWrapper = (props: Partial<WithActionProps> = {}): ReactWrapper<WithActionProps> => {
  const componentProps: WithActionProps = {
    ...defaultProps,
    ...props,
  };
  return mount(
    <WithAction {...componentProps}>
      <input />
    </WithAction>,
  );
};

describe('WithAction', () => {
  it('Should mount', () => {
    const wrapper = initializeWrapper();
    expect(wrapper).toBeDefined();
  });

  describe('Color Feature', () => {
    interface ColorFeatureTestCase {
      description: string;
      color?: BootstrapColors;
      buttonClass: string;
    }

    const testCases: ColorFeatureTestCase[] = [
      {
        description: `Given color is undefined, Should append 'btn-secondary' class to button with 'btn' but no other classes`,
        color: undefined,
        buttonClass: 'btn-secondary',
      },
      {
        description: `Given color is 'danger', Should append 'btn-danger' class to button with 'btn' but no other classes`,
        color: 'danger',
        buttonClass: 'btn-danger',
      },
      {
        description: `Given color is 'success', Should append 'btn-success' class to button with 'btn' but no other classes`,
        color: 'success',
        buttonClass: 'btn-success',
      },
      {
        description: `Given color is 'info', Should append 'btn-info' class to button with 'btn' but no other classes`,
        color: 'info',
        buttonClass: 'btn-info',
      },
      {
        description: `Given color is 'warning', Should append 'btn-warning' class to button with 'btn' but no other classes`,
        color: 'warning',
        buttonClass: 'btn-warning',
      },
      {
        description: `Given color is 'primary', Should append 'btn-primary' class to button with 'btn' but no other classes`,
        color: 'primary',
        buttonClass: 'btn-primary',
      },
      {
        description: `Given color is 'secondary', Should append 'btn-secondary' class to button with 'btn' but no other classes`,
        color: 'secondary',
        buttonClass: 'btn-secondary',
      },
    ];

    testCases.forEach(testCase => {
      it(testCase.description, () => {
        // Given
        const wrapper = initializeWrapper({
          color: testCase.color,
        });
        // When
        const button = wrapper.find('button').first();
        // Then
        expect(button.hasClass(testCase.buttonClass)).toBeTruthy();
        expect(
          button
            .prop('className')!
            .trim()
            .split(' '),
        ).toHaveLength(2);
      });
    });
  });

  describe('Disable Feature', () => {
    it(`Given isDisabled is undefined, Should not disable button`, () => {
      // Given
      const wrapper = initializeWrapper({
        isDisabled: undefined,
      });
      // When
      const button = wrapper.find('button').first();
      // Then
      expect(button.prop('disabled')).toBeFalsy();
    });

    it(`Given isDisabled is true, Should disable button`, () => {
      // Given
      const wrapper = initializeWrapper({
        isDisabled: true,
      });
      // When
      const button = wrapper.find('button').first();
      // Then
      expect(button.prop('disabled')).toBeTruthy();
    });

    it(`Given isDisabled is false, Should not disable button`, () => {
      // Given
      const wrapper = initializeWrapper({
        isDisabled: false,
      });
      // When
      const button = wrapper.find('button').first();
      // Then
      expect(button.prop('disabled')).toBeFalsy();
    });
  });

  describe('onTrigger Feature', () => {
    it('Given a click on the button, Should call onTrigger()', () => {
      // Given
      const callback = jest.fn();
      const wrapper = initializeWrapper({
        onTrigger: callback,
      });
      // When
      const button = wrapper.find('button').first();
      button.simulate('click');
      // Then
      expect(callback).toHaveBeenCalled();
    });
  });

  describe('Outline Feature', () => {
    interface OutlineFeatureTestCase {
      description: string;
      color?: BootstrapColors;
      outline?: boolean;
      buttonClass: string;
    }

    const testCases: OutlineFeatureTestCase[] = [
      {
        description: `Given color is undefined, When outline is undefined, Should append 'btn-secondary' class to button with 'btn' but no other classes`,
        color: undefined,
        outline: undefined,
        buttonClass: 'btn-secondary',
      },
      {
        description: `Given color is undefined, When outline is true, Should append 'btn-outline-secondary' class to button with 'btn' but no other classes`,
        color: undefined,
        outline: true,
        buttonClass: 'btn-outline-secondary',
      },
      {
        description: `Given color is undefined, When outline is false, Should append 'btn-secondary' class to button with 'btn' but no other classes`,
        color: undefined,
        outline: false,
        buttonClass: 'btn-secondary',
      },
      {
        description: `Given color is 'primary', When outline is undefined, Should append 'btn-primary' class to button with 'btn' but no other classes`,
        color: 'primary',
        outline: undefined,
        buttonClass: 'btn-primary',
      },
      {
        description: `Given color is 'primary', When outline is true, Should append 'btn-outline-primary' class to button with 'btn' but no other classes`,
        color: 'primary',
        outline: true,
        buttonClass: 'btn-outline-primary',
      },
      {
        description: `Given color is 'primary', When outline is false, Should append 'btn-primary' class to button with 'btn' but no other classes`,
        color: 'primary',
        outline: false,
        buttonClass: 'btn-primary',
      },
      {
        description: `Given color is 'secondary', When outline is undefined, Should append 'btn-secondary' class to button with 'btn' but no other classes`,
        color: 'secondary',
        outline: undefined,
        buttonClass: 'btn-secondary',
      },
      {
        description: `Given color is 'secondary', When outline is true, Should append 'btn-outline-secondary' class to button with 'btn' but no other classes`,
        color: 'secondary',
        outline: true,
        buttonClass: 'btn-outline-secondary',
      },
      {
        description: `Given color is 'secondary', When outline is false, Should append 'btn-secondary' class to button with 'btn' but no other classes`,
        color: 'secondary',
        outline: false,
        buttonClass: 'btn-secondary',
      },
      {
        description: `Given color is 'success', When outline is undefined, Should append 'btn-success' class to button with 'btn' but no other classes`,
        color: 'success',
        outline: undefined,
        buttonClass: 'btn-success',
      },
      {
        description: `Given color is 'success', When outline is true, Should append 'btn-outline-success' class to button with 'btn' but no other classes`,
        color: 'success',
        outline: true,
        buttonClass: 'btn-outline-success',
      },
      {
        description: `Given color is 'success', When outline is false, Should append 'btn-success' class to button with 'btn' but no other classes`,
        color: 'success',
        outline: false,
        buttonClass: 'btn-success',
      },
      {
        description: `Given color is 'danger', When outline is undefined, Should append 'btn-danger' class to button with 'btn' but no other classes`,
        color: 'danger',
        outline: undefined,
        buttonClass: 'btn-danger',
      },
      {
        description: `Given color is 'danger', When outline is true, Should append 'btn-outline-danger' class to button with 'btn' but no other classes`,
        color: 'danger',
        outline: true,
        buttonClass: 'btn-outline-danger',
      },
      {
        description: `Given color is 'danger', When outline is false, Should append 'btn-danger' class to button with 'btn' but no other classes`,
        color: 'danger',
        outline: false,
        buttonClass: 'btn-danger',
      },
      {
        description: `Given color is 'warning', When outline is undefined, Should append 'btn-warning' class to button with 'btn' but no other classes`,
        color: 'warning',
        outline: undefined,
        buttonClass: 'btn-warning',
      },
      {
        description: `Given color is 'warning', When outline is true, Should append 'btn-outline-warning' class to button with 'btn' but no other classes`,
        color: 'warning',
        outline: true,
        buttonClass: 'btn-outline-warning',
      },
      {
        description: `Given color is 'warning', When outline is false, Should append 'btn-warning' class to button with 'btn' but no other classes`,
        color: 'warning',
        outline: false,
        buttonClass: 'btn-warning',
      },
      {
        description: `Given color is 'info', When outline is undefined, Should append 'btn-info' class to button with 'btn' but no other classes`,
        color: 'info',
        outline: undefined,
        buttonClass: 'btn-info',
      },
      {
        description: `Given color is 'info', When outline is true, Should append 'btn-outline-info' class to button with 'btn' but no other classes`,
        color: 'info',
        outline: true,
        buttonClass: 'btn-outline-info',
      },
      {
        description: `Given color is 'info', When outline is false, Should append 'btn-info' class to button with 'btn' but no other classes`,
        color: 'info',
        outline: false,
        buttonClass: 'btn-info',
      },
    ];

    testCases.forEach(testCase => {
      it(testCase.description, () => {
        // Given
        const wrapper = initializeWrapper({
          color: testCase.color,
          outline: testCase.outline,
        });
        // When
        const button = wrapper.find('button').first();
        // Then
        expect(button.hasClass(testCase.buttonClass)).toBeTruthy();
        expect(
          button
            .prop('className')!
            .trim()
            .split(' '),
        ).toHaveLength(2);
      });
    });
  });

  describe('Text Feature', () => {
    it(`Should display text in button`, () => {
      // Given
      const wrapper = initializeWrapper({
        text: 'text',
      });
      // When
      const button = wrapper.find('button').first();
      // Then
      expect(button.text()).toBe('text');
    });
  });
});
