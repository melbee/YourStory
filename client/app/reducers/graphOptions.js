// 'use strict';

// function graphOptions(state=[], action) {
//   console.log("inside graphOptions")
//   switch (action.type) {
//     case 'FETCH_GRAPH_OPTIONS': {
//       // if(indexOf(action.payload) === -1) {
//       //   console.log("payload:", action.payload);
//       //   state.push("goodbay");
//       // }
//       console.log("state from reducer:", payload)
//       return state
//       break;
//     }
//   }
//   return state;
// }

// export default graphOptions;

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