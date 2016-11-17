import React from 'react';
import {combineReducers} from 'redux';

import count from './count';
import visData from './history';
import chromeID from './chrome_id';

export default combineReducers({
  count,
  visData,
  chromeID,
});


// export default combineReducers({
//   history,
// })

// export default historyReducer;

