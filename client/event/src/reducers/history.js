const initialState = [{domain: 'google.com', visits: 50 }];

export default function(state=initialState, action) {
console.log("inside history.js");
  switch(action.type) {
    case 'FETCH_VIS_DATA': {
      console.log('action payload', action.payload.data);
      return { ...state, visData: action.payload.data };
      break;
  }
  }

  return state;
}
