import axios from 'axios';
import fetchVisData from '../actions/fetch_vis_data';
import store from '../store';

// const initialState = 1;

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case 'FETCH_TOKEN':
//       return action.payload;
//     default:
//       return state;
//   }
// };




// function loadTokenOnResponse (data) {
//   return {
//     type: 'FETCH_TOKEN',
//     payload: data, //token
//   };
// }

// export default function fetchToken() {
//   return function (dispatch) {


//     chrome.identity.getAuthToken({
//       interactive: true,
//     }, (token) => {
//       if (chrome.runtime.lastError) {
//         alert(chrome.runtime.lastError.message);
//         return;
//       }
//       const x = new XMLHttpRequest();
//       x.open('GET', 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + token);
//       x.onload = function () {
//         const userInfo = JSON.parse(x.response);

//         console.log('User info from chrome: ', userInfo.id);
//         axios({
//           method: 'post',
//           url: 'http://localhost:3000/api/users', // 'http://yourstory-app.herokuapp.com/api/history'
//           data: { chromeID: userInfo.id, username: userInfo.name },
//         }).then((response) => {

//           dispatch(loadTokenOnResponse(response));
//         }).catch((error) => {
//           console.log(error);
//         });
//       };
//       x.send();
//     });
//     return null;
//   };
// }



export default function getToken() {
  console.log("inside get token func");
// chrome.identity.getAuthToken({
//     interactive: true,
//   }, (token) => {

//   }

const test = () => {
chrome.identity.getAuthToken({
    interactive: true,
  }, (token) => {
    if (chrome.runtime.lastError) {
      alert(chrome.runtime.lastError.message);
      return;
    }
    const x = new XMLHttpRequest();
    x.open('GET', 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + token);
    x.onload = function () {
      const userInfo = JSON.parse(x.response);
      console.log('User info from chrome: ', userInfo.id);
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/users', // 'http://yourstory-app.herokuapp.com/api/history'
        data: { chromeID: userInfo.id, username: userInfo.name },
      })
        .then((response) => {
          var chromeID = JSON.parse(response.config.data).chromeID;
          console.log('CHROME ID', chromeID);
          
          setInterval(() => {
            counter++;
            console.log("counter: ", counter);
            store.dispatch(fetchVisData(response));
          }, 500);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    x.send();
  });
  }
}

