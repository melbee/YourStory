import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'react-chrome-redux';
import App from './components/app';

console.log("env", process.env.HOST);
const app = document.getElementById('app');

//if this anchor does not work, try creating element in body

const proxyStore = new Store({
  state: {},
  portName: 'YourStory',
});

const unsubscribe = proxyStore.subscribe(() => {
  unsubscribe(); // make sure to only fire once
  ReactDOM.render(
    <Provider store={proxyStore}>
      <App />
    </Provider>
  , app);
});
