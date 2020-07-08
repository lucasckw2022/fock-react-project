import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { Input } from '../Input/Input';
import { ItemList } from '../ItemList/ItemList';
import { WithAction } from '../WithAction/WithAction';
import { AppComponent, AppProps } from './App';

const defaultProps: AppProps = {
  isAddingItem: false,
  items: [],
  newItemInputValue: '',
  onAddItem: jest.fn(),
  onInitialActionDispatch: jest.fn(),
  onNewItemInputValueChange: jest.fn(),
  onRemoveItem: jest.fn(),
};

const initializeWrapper = (props: Partial<AppProps> = {}): ReactWrapper<AppProps> => {
  const componentProps: AppProps = {
    ...defaultProps,
    ...props,
  };
  return mount(<AppComponent {...componentProps} />);
};

describe('AppComponent', () => {
  it('Should pass onNewItemInputValueChange to <Input>', () => {
    // Given
    const callback = jest.fn();
    const wrapper = initializeWrapper({
      onNewItemInputValueChange: callback,
    });
    // When
    const input = wrapper.find(Input).first();
    // Then
    expect(input.prop('onChange')).toEqual(callback);
  });

  it('Should pass onRemoveItem to <ItemList>', () => {
    // Given
    const callback = jest.fn();
    const wrapper = initializeWrapper({
      onRemoveItem: callback,
    });
    // When
    const itemList = wrapper.find(ItemList).first();
    // Then
    expect(itemList.prop('onRemove')).toEqual(callback);
  });

  it('Should pass items to <ItemList>', () => {
    // Given
    const wrapper = initializeWrapper({
      items: ['A', 'B'],
    });
    // When
    const itemList = wrapper.find(ItemList).first();
    // Then
    expect(itemList.prop('items')).toEqual(['A', 'B']);
  });

  describe('onItemAdded Feature', () => {
    it('Given <WithAction> emits onTrigger(item), When newItemInputValue is undefined, Should not throw an error', () => {
      // Given
      const wrapper = initializeWrapper({
        newItemInputValue: undefined,
      });
      // When
      const withAction = wrapper.find(WithAction).first();
      // Then
      expect(() => withAction.props().onTrigger()).not.toThrowError();
    });

    it('Given <WithAction> emits onTrigger(item), When newItemInputValue is A, Should not call onAddItem with A', () => {
      // Given
      const callback = jest.fn();
      const wrapper = initializeWrapper({
        newItemInputValue: 'A',
        onAddItem: callback,
      });
      // When
      const withAction = wrapper.find(WithAction).first();
      withAction.props().onTrigger();
      // Then
      expect(callback).toBeCalledWith('A');
    });
  });
});
