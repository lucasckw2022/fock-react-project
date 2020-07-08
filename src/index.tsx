import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './components/App/App.connect';
import { configureStore } from './store/configureStore';

const appStore$ = configureStore();

const Index = () => {
  return (
    <Provider store={appStore$}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
