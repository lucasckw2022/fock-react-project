import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics/rootEpic';
import { initialAppState, rootReducer } from './root.reducer';

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = composeWithDevTools({});

export function configureStore() {
  const store = createStore(rootReducer, initialAppState, composeEnhancers(applyMiddleware(epicMiddleware)));

  epicMiddleware.run(rootEpic);

  return store;
}
