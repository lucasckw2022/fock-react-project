import { Actions } from '../../root.reducer';
import { ItemFetched, NewItemInputValueChanged } from './todo.actions';
import { intiialTodoState, TodoState } from './todo.models';

export function todoReducer(state: TodoState = intiialTodoState, action: Actions): TodoState {
  switch (action.type) {
    case 'NEW_ITEM_INPUT_VALUE_CHANGED':
      return onNewItemInputValueChanged(state, action);
    case 'ITEM_FETCH_REQUESTED':
      return onItemFetchRequested(state);
    case 'ITEM_FETCHED':
      return onItemFetched(state, action);
    case 'ITEM_ADD_REQUESTED':
      return onItemAddRequested(state);
    case 'ITEM_ADDED':
      return onItemAdded(state);
    default:
      return state;
  }
}

function onNewItemInputValueChanged(state: TodoState, { value }: NewItemInputValueChanged): TodoState {
  return {
    ...state,
    newItemInputValue: value,
  };
}

function onItemFetchRequested(state: TodoState): TodoState {
  return {
    ...state,
    items: [],
  };
}

function onItemFetched(state: TodoState, { items }: ItemFetched): TodoState {
  return {
    ...state,
    items,
  };
}

function onItemAddRequested(state: TodoState): TodoState {
  return {
    ...state,
    isAddingItem: true,
  };
}

function onItemAdded(state: TodoState): TodoState {
  return {
    ...state,
    isAddingItem: false,
    newItemInputValue: "",
  };
}
