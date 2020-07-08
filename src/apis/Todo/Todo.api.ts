import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface FetchTodoApi {
  fetch(): Observable<string[]>;
}

export interface AddTodoApi {
  add(items: string): Observable<string>;
}

export interface SaveTodoApi {
  save(items: string[]): Observable<string[]>;
}

export interface RemoveTodoApi {
  remove(item: string): Observable<string>;
}

export type TodoApi = FetchTodoApi & AddTodoApi & SaveTodoApi & RemoveTodoApi;

export const todoApi = (todoMock: string[]): TodoApi => {
  if (!localStorage.getItem('todo')) {
    localStorage.setItem('todo', JSON.stringify(todoMock));
  }

  return {
    fetch(): Observable<string[]> {
      const rawValue = window.localStorage.getItem('todo');
      const todoItems = rawValue ? (JSON.parse(rawValue) as string[]) : [];
      return of(todoItems).pipe(delay(1000));
    },
    add(item: string): Observable<string> {
      const rawValue = window.localStorage.getItem('todo');
      const todoItems = rawValue ? (JSON.parse(rawValue) as string[]) : [];
      const newItemList = [...todoItems, item];
      window.localStorage.setItem('todo', JSON.stringify(newItemList));
      return of(item).pipe(delay(1000));
    },
    save(items: string[]): Observable<string[]> {
      window.localStorage.setItem('todo', JSON.stringify(items));
      return of(items).pipe(delay(1000));
    },
    remove(item: string): Observable<string> {
      const rawValue = window.localStorage.getItem('todo');
      const todoItems = rawValue ? (JSON.parse(rawValue) as string[]) : [];
      const newItemList = todoItems.filter(i => i !== item);
      window.localStorage.setItem('todo', JSON.stringify(newItemList));
      return of(item).pipe(delay(1000));
    },
  };
};
