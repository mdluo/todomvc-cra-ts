import React from 'react';
import ReactDOM from 'react-dom';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

import TodoApp from './app';
import { TodoModel } from './todoModel';
import * as serviceWorker from './serviceWorker';

const model = new TodoModel('react-todos');

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <TodoApp model={model} />
    </React.StrictMode>,
    document.getElementsByClassName('todoapp')[0]
  );
}

model.subscribe(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
