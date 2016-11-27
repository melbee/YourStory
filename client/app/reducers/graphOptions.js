'use strict';

function graphOptions(state=[], action) {
  switch(action.type) {
    case 'FETCH_GRAPH_OPTIONS': {
      console.log("payload from action inside reducer:", action.payload);
      state = action.payload;
      return state;
      break;
    }
  }
  return state;
}

export default graphOptions;