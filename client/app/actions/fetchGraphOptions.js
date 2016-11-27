'use strict';

function loadgraphOptions(data) {
  return {
    type: 'FETCH_GRAPH_OPTIONS',
    payload: data,
  };
}

export default function fetchGraphOptions (newWeekData) {
  console.log("inside fetchGraphOptions parsed week data array:", newWeekData);
  return function (dispatch) {
    dispatch(loadgraphOptions(newWeekData));

    return null;
  };
}
