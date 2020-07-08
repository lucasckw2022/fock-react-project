import { AppState } from './root.reducer';
import * as todoFeature from './state/todo/todo.selectors';

export function getNewItemInputValue(state: AppState): string {
  return todoFeature.getNewItemInputValue(state.todo);
}

export function getItems(state: AppState): string[] {
  return todoFeature.getItems(state.todo);
}

export function isAddingItem(state: AppState): boolean {
  return todoFeature.isAddingItem(state.todo);
}
