const initialState = 0;

export default (state = initialState, action) => {
console.log("inside count.js");
  switch (action.type) {
    case 'ADD_COUNT':
      return state + (action.payload || 1);
    default:
      return state;
  }
};
