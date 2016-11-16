import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { wrapStore } from 'react-chrome-redux';

import rootReducer from './reducers';
// import historyReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  ReduxThunk
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

wrapStore(store, {
  portName: 'YourStory',
});

// export default store;
