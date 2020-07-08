import { itemAdded, itemAddRequested, itemFetched, itemFetchRequested, newItemInputValueChanged } from './todo.actions';
import { TodoState } from './todo.models';
import { todoReducer } from './todo.reducer';

const defaultState: TodoState = {
  isAddingItem: false,
  items: [],
  newItemInputValue: '',
};

describe('Todo Reducer', () => {
  it('Should handle NEW_ITEM_INPUT_VALUE_CHANGED', () => {
    // Given
    const state: TodoState = {
      ...defaultState,
      newItemInputValue: 'A',
    };
    // When
    const action = newItemInputValueChanged('B');
    const actual = todoReducer(state, action);
    // Then
    const expected: TodoState = {
      ...defaultState,
      newItemInputValue: 'B',
    };
    expect(actual).toEqual(expected);
  });

  it('Should handle ITEM_FETCH_REQUESTED', () => {
    // Given
    const state: TodoState = {
      ...defaultState,
      items: ['A', 'B'],
    };
    // When
    const action = itemFetchRequested();
    const actual = todoReducer(state, action);
    // Then
    const expected: TodoState = {
      ...defaultState,
      items: [],
    };
    expect(actual).toEqual(expected);
  });

  it('Should handle ITEM_FETCHED', () => {
    // Given
    const state: TodoState = {
      ...defaultState,
      items: [],
    };
    // When
    const action = itemFetched(['A', 'B']);
    const actual = todoReducer(state, action);
    // Then
    const expected: TodoState = {
      ...defaultState,
      items: ['A', 'B'],
    };
    expect(actual).toEqual(expected);
  });

  it('Should handle ITEM_ADD_REQUESTED', () => {
    // Given
    const state: TodoState = {
      ...defaultState,
      isAddingItem: false,
    };
    // When
    const action = itemAddRequested('A');
    const actual = todoReducer(state, action);
    // Then
    const expected: TodoState = {
      ...defaultState,
      isAddingItem: true,
    };
    expect(actual).toEqual(expected);
  });

  it('Should handle ITEM_ADDED', () => {
    // Given
    const state: TodoState = {
      ...defaultState,
      isAddingItem: true,
    };
    // When
    const action = itemAdded('A');
    const actual = todoReducer(state, action);
    // Then
    const expected: TodoState = {
      ...defaultState,
      isAddingItem: false,
    };
    expect(actual).toEqual(expected);
  });
});
