'use strict';

function graphOptions(state=[], action) {
  switch(action.type) {
    case 'FETCH_GRAPH_OPTIONS': {
      console.log("state from reducer:", state);
      if (!(state.includes(action.payload)) && state.length < 3) {
        state.push(action.payload);
      }
      return state;
      break;
    }
  }
  return state;
}

export default graphOptions;