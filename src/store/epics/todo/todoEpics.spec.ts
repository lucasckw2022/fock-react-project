import { ActionsObservable, StateObservable } from 'redux-observable';
import { AddTodoApi, FetchTodoApi } from '../../../apis/Todo/Todo.api';
import { getTestScheduler } from '../../../tests/utils/testScheduler';
import { itemAdded, itemAddRequested, itemFetched, itemFetchRequested } from '../../state/todo/todo.actions';
import * as SUT from './todoEpics';

describe('Todo Epics', () => {
  describe('todoItemFetchRequestedEpic', () => {
    it('Given a ITEM_FETCH_REQUESTED is received, Should emit a ITEM_FETCHED', () => {
      getTestScheduler().run(({ hot, cold, expectObservable }) => {
        const actionInput$ = hot('-a', {
          a: itemFetchRequested(),
        });
        const action$ = new ActionsObservable(actionInput$);

        const stateInput$ = hot('-a', { a: null });
        const state$ = new StateObservable(stateInput$, null);

        const response: string[] = ['item'];
        const mockedApi$: FetchTodoApi = {
          fetch: jasmine.createSpy().and.returnValue(
            cold('--a', {
              a: response,
            }),
          ),
        };
        const epic = SUT.todoItemFetchRequestedEpic(mockedApi$);

        const output$ = epic(action$, state$, {});

        expectObservable(output$).toBe('---a', {
          a: itemFetched(response),
        });
      });
    });
  });

  describe('itemAddRequestedEpic', () => {
    it('Given a ITEM_ADD_REQUESTED is received, Should emit a ITEM_ADDED', () => {
      getTestScheduler().run(({ hot, cold, expectObservable }) => {
        const actionInput$ = hot('-a', {
          a: itemAddRequested('item'),
        });
        const action$ = new ActionsObservable(actionInput$);

        const stateInput$ = hot('-a', { a: null });
        const state$ = new StateObservable(stateInput$, null);

        const response: string = 'item';
        const mockedApi$: AddTodoApi = {
          add: jasmine.createSpy().and.returnValue(
            cold('--a', {
              a: response,
            }),
          ),
        };
        const epic = SUT.itemAddRequestedEpic(mockedApi$);

        const output$ = epic(action$, state$, {});

        expectObservable(output$).toBe('---a', {
          a: itemAdded('item'),
        });
      });
    });
  });

  describe('fetchTodoItemOnItemAddedEpic', () => {
    it('Given a ITEM_ADDED is received, Should emit a ITEM_FETCH_REQUESTED', () => {
      getTestScheduler().run(({ hot, expectObservable }) => {
        const actionInput$ = hot('-a', {
          a: itemAdded('item'),
        });
        const action$ = new ActionsObservable(actionInput$);

        const stateInput$ = hot('-a', { a: null });
        const state$ = new StateObservable(stateInput$, null);

        const epic = SUT.fetchTodoItemOnItemAddedEpic();

        const output$ = epic(action$, state$, {});

        expectObservable(output$).toBe('-a', {
          a: itemFetchRequested(),
        });
      });
    });
  });
});
