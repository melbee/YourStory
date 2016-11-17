import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { alias, wrapStore } from 'react-chrome-redux';
import rootReducer from './reducers';
import loadTokenOnResponse from './auth/auth';
import fetchVisData from './actions/fetch_vis_data.js';
import axios from 'axios';

const aliases = {
  // this key is the name of the action to proxy, the value is the action
  // creator that gets executed when the proxied action is received in the
  // background

  // 'user-clicked-alias': function() {
  //   const data = {
  //     type: ADD_COUNT,
  //     payload: {}
  //   };

  //   return data;
  // },

  'user-clicked-alias': () => {
    // this call can only be made in the background script
    // chrome.notifications.create('hello world from store.js');
    chrome.identity.getAuthToken({
      interactive: true,
    }, (token) => {
      if (chrome.runtime.lastError) {
        alert(chrome.runtime.lastError.message);
        return;
      }
      const x = new XMLHttpRequest();
      x.open('GET', 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + token);
      x.onload = function () {
        const userInfo = JSON.parse(x.response);

        console.log('User info from chrome from melba: ', userInfo.id);
        axios({
          method: 'post',
          url: 'http://localhost:3000/api/user', // 'http://yourstory-app.herokuapp.com/api/history'
          data: { chromeID: userInfo.id, username: userInfo.name },
        }).then((response) => {
          // dispatch(fetchVisData(response));
          // this.props.dispatch({
          //   type: 'FETCH_TOKEN',
          //   payload: 'got token',
          // });
        }).catch((error) => {
          console.log(error);
        });
      };
      x.send();
    });
  },

  // 'FETCH_VIS_DATA_STORE': () => {
  //     return {data: [{ domain: 'espn.com', visits: 50 }, { domain: 'wsj.com', visits: 250 }, { domain: 'yahoo.com', visits: 150 }]};
  // },
};

const createStoreWithMiddleware = applyMiddleware(
  ReduxThunk, alias(aliases)
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

wrapStore(store, {
  portName: 'YourStory',
});
