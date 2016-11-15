import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { wrapStore } from 'react-chrome-redux';

import historyReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  ReduxThunk
)(createStore);

const store = createStoreWithMiddleware(historyReducer);

wrapStore(store, {
  portName: 'YourStory',
});


// export default store;
