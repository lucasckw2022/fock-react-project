import { TodoState } from './todo.models';
import * as SUT from './todo.selectors';

const defaultState: TodoState = {
  isAddingItem: false,
  items: [],
  newItemInputValue: '',
};

describe('Todo Selectors', () => {
  describe('getNewItemInputValue', () => {
    it('Given newItemInputValue is an empty string, Should return empty string', () => {
      // Given
      const state: TodoState = {
        ...defaultState,
        newItemInputValue: '',
      };
      // When
      const actual = SUT.getNewItemInputValue(state);
      // Then
      const expected: string = '';
      expect(actual).toEqual(expected);
    });

    it('Given newItemInputValue is an non-empty string, Should return the string', () => {
      // Given
      const state: TodoState = {
        ...defaultState,
        newItemInputValue: 'ABC',
      };
      // When
      const actual = SUT.getNewItemInputValue(state);
      // Then
      const expected: string = 'ABC';
      expect(actual).toEqual(expected);
    });
  });

  describe('getItems', () => {
    it('Given items is an empty array, Should return empty array', () => {
      // Given
      const state: TodoState = {
        ...defaultState,
        items: [],
      };
      // When
      const actual = SUT.getItems(state);
      // Then
      const expected: string[] = [];
      expect(actual).toEqual(expected);
    });

    it('Given items is an non-empty array, Should return the array', () => {
      // Given
      const state: TodoState = {
        ...defaultState,
        items: ['A', 'B', 'C'],
      };
      // When
      const actual = SUT.getItems(state);
      // Then
      const expected: string[] = ['A', 'B', 'C'];
      expect(actual).toEqual(expected);
    });
  });

  describe('isAddingItem', () => {
    it('Given isAddingItem is true, Should return true', () => {
      // Given
      const state: TodoState = {
        ...defaultState,
        isAddingItem: true,
      };
      // When
      const actual = SUT.isAddingItem(state);
      // Then
      const expected: boolean = true;
      expect(actual).toEqual(expected);
    });

    it('Given isAddingItem is false, Should return false', () => {
      // Given
      const state: TodoState = {
        ...defaultState,
        isAddingItem: false,
      };
      // When
      const actual = SUT.isAddingItem(state);
      // Then
      const expected: boolean = false;
      expect(actual).toEqual(expected);
    });
  });
});
