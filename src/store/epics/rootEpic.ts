import { combineEpics } from 'redux-observable';
import { todoApi } from '../../apis/Todo/Todo.api';
import { todoMock } from '../../apis/Todo/Todo.mock';
import { fetchTodoItemOnItemAddedEpic, itemAddRequestedEpic, todoItemFetchRequestedEpic } from './todo/todoEpics';

const todoApi$ = todoApi(todoMock);

export const rootEpic = combineEpics(
  fetchTodoItemOnItemAddedEpic(),
  itemAddRequestedEpic(todoApi$),
  todoItemFetchRequestedEpic(todoApi$),
);
