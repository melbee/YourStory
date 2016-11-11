<<<<<<< HEAD
const db = require('../db/config')
const User = require('../db/schema')
=======
const db = require('../db/config');
const _ = require('underscore');
const Sequelize = require('sequelize');

const Domain = require('../db/schema').Domain;
>>>>>>> server/postAllData

// Establishes the connection to the database
db.authenticate().then(() => {
  console.log('Connection established')
}).catch((err) => {
  console.log('Unable to connect: ', err)
})

// database routes / queries
module.exports = {
  postHistory: (req, res) => {
<<<<<<< HEAD
    console.log('inside routehelpers.js postHistory API')
    const allData = req.body.history // array of all data
    // console.log('====FROM SERVER====', allData.map((historyItem) => {
    //   return historyItem
=======
    const allData = req.body.history;
    const id = req.body.chromeID //TODO: change name to whatever natasha calls this variable

    // ======= parse url to get unique domain =======
    allData.map((historyItem) => {
      const url = historyItem.url;
      let domain;
      if (url.indexOf('://') > -1) {
        domain = url.split('/')[2];
      } else {
        domain = url.split('/')[0];
      }
      domain = domain.split(':')[0];
      historyItem.domain = domain;
      return historyItem;
    });
    console.log("allData:", allData);

    // ======= insert domain into Domain db =======
    // allData.map((historyItem) => {
    // });
      const uniqueDomains = _.unique(allData);
      console.log("uniqueDomains", uniqueDomains);

      
      
      Domain
        .findOrCreate({ where: { domain: historyItem.domain } })
        .catch((err) => {
          console.log(err);
        });    
    // Domain
    //   .findAll({ where: { domain: "google.com" } }).then(function(domain) {
    //     console.log('found domain', domain);
    //   });
>>>>>>> server/postAllData

    const dummyData = [
      { domain: 'google', visits: 50 },
      { domain: 'facebook', visits: 30 },
      { domain: 'twitter', visits: 20 },
      { domain: 'instagram', visits: 100 },
      { domain: 'apple', visits: 5 }]
    res.status(201).json(dummyData)
  },

  postUser: (req, res) => {
    console.log('inside routehelpers.js postUser API')
    // save to the session object the chrome id
    req.session.user = req.body.chromeID
    // find or create user in the db
    User.findOrCreate({where: {chrome_id: req.session.user}, defaults: {username: req.body.username}})
      .spread(function (user, created) {
        console.log(user.get({
          plain: true
        }))
        console.log('user_created:', created)
        // send back to the client unique client identifier(Chrome_id)
        res.send(req.session.user)
      })
  }
}
