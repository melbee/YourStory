import React from 'react';
import {combineReducers} from 'redux';

import count from './count';
import historyReducer from './history';

export default combineReducers({
  count,
  history,
});






// export default combineReducers({
//   history,
// })

// export default historyReducer;

