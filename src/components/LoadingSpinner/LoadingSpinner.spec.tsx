import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { BootstrapColors, BootstrapSizes } from '../../models/Bootstrap.model';
import { LoadingSpinner, LoadingSpinnerProps } from './LoadingSpinner';

const defaultProps: LoadingSpinnerProps = {};

const initializeWrapper = (props: Partial<LoadingSpinnerProps> = {}): ShallowWrapper<LoadingSpinnerProps> => {
  const componentProps: LoadingSpinnerProps = {
    ...defaultProps,
    ...props,
  };
  return shallow(<LoadingSpinner {...componentProps}></LoadingSpinner>);
};

describe('LoadingSpinner', () => {
  describe('Color feature', () => {
    interface ColorFeatureTestCase {
      description: string;
      color?: BootstrapColors;
      className: string;
    }

    const testCases: ColorFeatureTestCase[] = [
      {
        description: `When color is undefined, Should apprend 'text-secondary' on the container`,
        color: undefined,
        className: 'text-secondary',
      },
      {
        description: `When color is 'primary', Should apprend 'text-primary' on the container`,
        color: 'primary',
        className: 'text-primary',
      },
      {
        description: `When color is 'secondary', Should apprend 'text-secondary' on the container`,
        color: 'secondary',
        className: 'text-secondary',
      },
      {
        description: `When color is 'success', Should apprend 'text-success' on the container`,
        color: 'success',
        className: 'text-success',
      },
      {
        description: `When color is 'danger', Should apprend 'text-danger' on the container`,
        color: 'danger',
        className: 'text-danger',
      },
      {
        description: `When color is 'info', Should apprend 'text-info' on the container`,
        color: 'info',
        className: 'text-info',
      },
      {
        description: `When color is 'warning', Should apprend 'text-warning' on the container`,
        color: 'warning',
        className: 'text-warning',
      },
    ];

    testCases.forEach(testCase => {
      it(testCase.description, () => {
        // Given
        const wrapper = initializeWrapper({
          color: testCase.color,
        });
        // When
        const container = wrapper.find('div').first();
        // Then
        expect(container.hasClass(testCase.className)).toBeTruthy();
        expect(
          container
            .prop('className')!
            .trim()
            .split(' '),
        ).toHaveLength(3);
      });
    });
  });

  describe('Size feature', () => {
    interface SizeFeatureTestCase {
      description: string;
      size?: BootstrapSizes;
      className: string;
    }

    const testCases: SizeFeatureTestCase[] = [
      {
        description: `When size is undefined, Should apprend 'spinner-border-md' on the container`,
        size: undefined,
        className: 'spinner-border-md',
      },
      {
        description: `When size is 'sm', Should apprend 'spinner-border-sm' on the container`,
        size: 'sm',
        className: 'spinner-border-sm',
      },
      {
        description: `When size is 'md', Should apprend 'spinner-border-md' on the container`,
        size: 'md',
        className: 'spinner-border-md',
      },
    ];

    testCases.forEach(testCase => {
      it(testCase.description, () => {
        // Given
        const wrapper = initializeWrapper({
          size: testCase.size,
        });
        // When
        const container = wrapper.find('div').first();
        // Then
        expect(container.hasClass(testCase.className)).toBeTruthy();
        expect(
          container
            .prop('className')!
            .trim()
            .split(' '),
        ).toHaveLength(3);
      });
    });
  });
});
