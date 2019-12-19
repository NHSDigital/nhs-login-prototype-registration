
// External dependencies
const express = require('express');
const router = express.Router();
const notify = require('notifications-node-client').NotifyClient;

// // Notify integration
const notifyClient = new notify(process.env.NOTIFYAPIKEY);

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/set-up/v4/register-create-password', function (req, res) {
  //if(req.body.userEmail === 'will.hepworth1@nhs.net'){
    notifyClient.sendEmail('443d169e-9fbb-4fd0-b77e-e57389ed1804',req.body.userEmail)
    .then(function (response) {
      res.redirect('/set-up/v4/register-check-email');
    }).catch(function (error) {
        console.log('notify-error' + error)
        res.redirect('/set-up/v4/enter-email');
      });;
  //}
  //res.redirect('/set-up/v4/register-check-email');
});

router.post('/set-up/v4/register-enter-phone', function (req, res) {
  console.log('method called');
  // if(req.body.phoneNumber === '07429854013'){
    notifyClient.sendSms('2b7236fc-d18b-493c-807a-c185a2330ee2',req.body.phoneNumber)
    .then(function (response) {
      console.log('success')
      res.redirect('/set-up/v4/register-enter-OTP');
    }).catch(function (error) {
        console.log('notify-error' + error)
        res.redirect('/set-up/v4/register-enter-OTP');
      });
  // }
   //res.redirect('/set-up/v4/register-enter-OTP');
});

// Add your routes here - above the module.exports line

// Have login
router.post('/v1/set-up/have-login', function (req, res) {

  // Make a variable and give it the value from 'know-nhs-number'
  var haveLogin = req.session.data['have-login']

  // Check whether the variable matches a condition
  if (haveLogin == "Yes") {
    // Send user to next page
    res.redirect('login')
  }
  else {
    // Send user to ineligible page
    res.redirect('create')
  }

})

module.exports = router;


// Dev mode


// Dev Mode

function devModeRoute(req, res, next) {
  if (!req.session.data['devMode']) {
    console.log('no data found');
    var devMode = req.query.devMode;
    if (devMode === 'true') {
      console.log('devmode detected');
      req.session.data['devMode'] = 'true'
      console.log('local storage updated');
    } else {
      console.log('devmode not detected');
    }
  } else {
    console.log('data found and set to ' + req.session.data['devMode'])
  }
  next()
}

router.get("/*", devModeRoute);
router.get("/", devModeRoute);