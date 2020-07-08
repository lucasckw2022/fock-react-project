import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { ItemList, ItemListProps } from './ItemList';

const defaultProps: ItemListProps = {
  items: [],
  onRemove: jest.fn(),
};

const initializeWrapper = (props: Partial<ItemListProps> = {}): ReactWrapper<ItemListProps> => {
  const componentProps: ItemListProps = {
    ...defaultProps,
    ...props,
  };
  return mount(<ItemList {...componentProps}></ItemList>);
};

describe('ItemList', () => {
  it('Given a list of items, Should render correct items', () => {
    // Given
    const callback = jest.fn();
    const wrapper = initializeWrapper({
      items: ['Item A', 'Item B', 'Item C'],
      onRemove: callback,
    });
    // When
    const firstItem = wrapper
      .find('li')
      .first()
      .find('span')
      .first();
    const secondItem = wrapper
      .find('li')
      .at(1)
      .find('span')
      .first();
    const thirdItem = wrapper
      .find('li')
      .last()
      .find('span')
      .first();
    // Then
    expect(firstItem.text()).toBe('Item A');
    expect(secondItem.text()).toBe('Item B');
    expect(thirdItem.text()).toBe('Item C');
  });

  it('Given a list of items, When click on close button, Should call onRemove()', () => {
    // Given
    const callback = jest.fn();
    const wrapper = initializeWrapper({
      items: ['A', 'B', 'C'],
      onRemove: callback,
    });
    // When
    const firstRemoveButton = wrapper.find('button').first();
    firstRemoveButton.simulate('click');
    // Then
    expect(callback).toHaveBeenCalledWith('A');
    // When
    const lastRemoveButton = wrapper.find('button').last();
    lastRemoveButton.simulate('click');
    // Then
    expect(callback).toHaveBeenCalledWith('C');
  });
});
