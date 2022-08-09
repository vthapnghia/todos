import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from './component/TodoApp';
import { Provider } from 'react-redux';
import {store} from '../src/redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoApp/>
    </Provider>
  </React.StrictMode>
);

