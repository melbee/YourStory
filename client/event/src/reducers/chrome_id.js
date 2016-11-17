const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TOKEN':
      return { ...state, chromeID: action.payload };
    default:
      return state;
  }
};
