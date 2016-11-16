import axios from 'axios';
import getToken from '../auth/auth';

// const initialState = [{domain: 'google.com', visits: 50 }];

// export default (state = initialState, action) => {
//   console.log("inside fetch vis data");
//   switch (action.type) {
//     case 'FETCH_VIS_DATA':
//       return function(){
//         console.log("inside fetch vis data above axios");
//         // axios({
//         //   method: 'post',
//         //   url: 'http://localhost:3000/api/history',
//         //   data: { history: array, chromeID: id },
//         // }).then((response) => {   
//         //   console.log("hello")
//         // }).catch((error) => {
//         //   console.log("error");
//         // });
//       }();
//     default:
//       return state;
//   }
// };



// function loadVisDataUponResponse (data) {
//   return {
//     type: 'FETCH_VIS_DATA',
//     payload: data,
//   };
// }

// export default function fetchVisData (id) {
//   console.log('fetch vis data', id);
//   return function (dispatch) {
// secondsPerDay = 1000 * 60 * 60 * 24;
//     const oneDayAgo = (new Date).getTime() - microsecondsPerDay;

//     chrome.history.search({
//       'text': '', // Return every history item....
//       'startTime': oneDayAgo, // that was accessed less than one week ago.
//     }, (array) => {
//       axios({
//         method: 'post',
//         url: 'http://localhost:3000/api/history',
//         data: { history: array, chromeID: id },
//       }).then((response) => {   
//         dispatch(loadVisDataUponResponse(response));
//       });
//     });

//     return null;
//   };
// }
