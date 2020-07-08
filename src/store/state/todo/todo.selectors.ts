import { TodoState } from './todo.models';

export function getNewItemInputValue(state: TodoState): string {
  return state.newItemInputValue;
}

export function getItems(state: TodoState): string[] {
  return state.items;
}

export function isAddingItem(state: TodoState): boolean {
  return state.isAddingItem;
}
