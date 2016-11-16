import React from 'react';
import {combineReducers} from 'redux';

import count from './count';
import visData from './history';

export default combineReducers({
  count,
  visData,
});


// export default combineReducers({
//   history,
// })

// export default historyReducer;

