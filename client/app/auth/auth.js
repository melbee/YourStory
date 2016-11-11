import axios from 'axios'
import fetchVisData from '../actions/fetch_vis_data'
import store from '../store'

export default function getToken () {
  chrome.identity.getAuthToken({
    interactive: true
  }, (token) => {
    if (chrome.runtime.lastError) {
      alert(chrome.runtime.lastError.message)
      return
    }
    const x = new XMLHttpRequest()
    x.open('GET', 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + token)
    x.onload = function () {
      const userInfo = JSON.parse(x.response)
      console.log(userInfo)
      axios({
        method: 'post',
        url: 'http://yourstory-app.herokuapp.com/api/users',
        data: { chromeID: userInfo.id, username: userInfo.name }
      })
        .then((response) => {
          console.log(response)
          setInterval(() => {
            store.dispatch(fetchVisData(response))
          }, 1000 * 60)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    x.send()
  })
}
