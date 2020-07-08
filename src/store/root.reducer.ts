import { combineReducers } from 'redux';
import { TodoActions } from './state/todo/todo.actions';
import { intiialTodoState, TodoState } from './state/todo/todo.models';
import { todoReducer } from './state/todo/todo.reducer';

export type Actions = TodoActions;

export interface AppState {
  todo: TodoState;
}

export const rootReducer = combineReducers<AppState, Actions>({
  todo: todoReducer,
});

export const initialAppState: AppState = {
  todo: intiialTodoState,
};
