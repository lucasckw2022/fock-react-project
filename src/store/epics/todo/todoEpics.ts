import { Epic, ofType } from 'redux-observable';
import { map, switchMap } from 'rxjs/operators';
import { AddTodoApi, FetchTodoApi, RemoveTodoApi } from '../../../apis/Todo/Todo.api';
import {
  itemAdded,
  ItemAdded,
  ItemAddRequested,
  itemFetched,
  ItemFetchRequested,
  itemFetchRequested,
  ItemRemoveRequested,
  ItemRemoved,
  itemRemoved,
} from '../../state/todo/todo.actions';

export function todoItemFetchRequestedEpic(api$: FetchTodoApi): Epic {
  return actions$ =>
    actions$.pipe(
      ofType<ItemFetchRequested>('ITEM_FETCH_REQUESTED'),
      switchMap(() => {
        return api$.fetch().pipe(map(itemFetched));
      }),
    );
}

export function itemAddRequestedEpic(api$: AddTodoApi): Epic {
  return actions$ =>
    actions$.pipe(
      ofType<ItemAddRequested>('ITEM_ADD_REQUESTED'),
      switchMap(({ item }) => {
        return api$.add(item).pipe(map(() => itemAdded(item)));
      }),
    );
}

export function fetchTodoItemOnItemAddedEpic(): Epic {
  return actions$ =>
    actions$.pipe(
      ofType<ItemAdded>('ITEM_ADDED'),
      map(itemFetchRequested),
    );
}

export function removeTodoItemOnItemRemoveRequestEpic(api$: RemoveTodoApi): Epic {
  return actions$ =>
    actions$.pipe(
      ofType<ItemRemoveRequested>('ITEM_REMOVE_REQUESTED'),
      switchMap(({ item }) => {
        return api$.remove(item).pipe(map(() => itemRemoved(item)));
      }),
    );
}

export function fetchTodoItemOnItemRemovededEpic(): Epic {
  return actions$ =>
    actions$.pipe(
      ofType<ItemRemoved>('ITEM_REMOVED'),
      map(itemFetchRequested),
    );
}
