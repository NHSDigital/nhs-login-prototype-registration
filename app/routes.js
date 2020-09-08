// External dependencies
const express = require('express');
const router = express.Router();
// const notify = require('notifications-node-client').NotifyClient;
const request = require('request');

// Notify integration
// const notifyClient = new notify(process.env.NOTIFYAPIKEY);

// If you need to use Notify in the future the route will need updating to point to the most recent version (e.g. v4 or v5)

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
// router.post('/set-up/v5-b/register-create-password', function (req, res) {
//   //if(req.body.userEmail === 'will.hepworth1@nhs.net'){
//   notifyClient.sendEmail('443d169e-9fbb-4fd0-b77e-e57389ed1804', req.body.userEmail)
//     .then(function (response) {
//       res.redirect('/set-up/v5-b/register-check-email');
//     }).catch(function (error) {
//       console.log('notify-error' + error)
//       res.redirect('/set-up/v5-b/enter-email');
//     });;
//   }
//   res.redirect('/set-up/v5-b/register-check-email');
// });

// router.post('/set-up/v4/register-enter-phone', function (req, res) {
//   console.log('method called');
//   // if(req.body.phoneNumber === '07429854013'){
//   notifyClient.sendSms('2b7236fc-d18b-493c-807a-c185a2330ee2', req.body.phoneNumber)
//     .then(function (response) {
//       console.log('success')
//       res.redirect('/set-  up/v4/register-enter-OTP');
//     }).catch(function (error) {
//       console.log('notify-error' + error)
//       res.redirect('/set-up/v4/register-enter-OTP');
//     });
//   // }
//   //res.redirect('/set-up/v4/register-enter-OTP');
// });

// Routing for mid-level journey
// router.post('/set-up/v5-a/auth', function (req, res) {
//   // Makes variable and gives it the value from 'auth'
//   var p5 = req.session.data['p5']

//   // Check whether the variable matches a condition
//   if (p5 === "true"){
//     // Send user to next page
//     res.redirect('/p5/know-nhs-number')
//     }
//   else if (signIn === "true") {
//     // Send user to app page
//     res.redirect('/p5/sensely-finished')
//   }
//   else {
//     // Send user to ineligible page
//     res.redirect('/set-up/v5/auth')
//   }

// })

// router.post('/set-up/v5-b/auth', function (req, res) {
//   // Makes variable and gives it the value from 'auth'
//   var p5 = req.session.data['p5']

//   // Check whether the variable matches a condition
//   if (p5 === "true"){
//     // Send user to next page
//     res.redirect('/p5/know-nhs-number')
//     }
//   else if (signIn === "true") {
//     // Send user to app page
//     res.redirect('/p5/sensely-finished')
//   }
//   else {
//     // Send user to ineligible page
//     res.redirect('/set-up/v5/auth')
//   }

// })

// routing for sign in

router.post('/set-up/v5-b/what-you-need', function (req, res) {

  // Make a variable and give it the value from 'signIn'
  var signIn = req.session.data['signIn']

  // Check whether the variable matches a condition
  if (signIn == "true") {
    // Send user to next page
    res.redirect('login-enter-password')
  } else {
    // Send user to ineligible page
    res.redirect('register-create-password')
  }
})

router.post('/set-up/v5-a/enter-email', function (req, res) {

  // Make a variable and give it the value from 'signIn'
  var signIn = req.session.data['signIn']

  // Check whether the variable matches a condition
  if (signIn == "true") {
    // Send user to next page
    res.redirect('login-enter-password')
  } else {
    // Send user to ineligible page
    res.redirect('register-create-password')
  }
})

router.post('/p5/sensely-sign-in', function (req, res) {

  // Make a variable and give it the value from 'signIn'
  var optionB = req.session.data['optionB']

  // Check whether the variable matches a condition
  if (optionB == "true") {
    // Send user to next page
    res.redirect('/set-up/v5-b/enter-email')
  } else {
    // Send user to ineligible page
    res.redirect('/set-up/v5-a/enter-email')
  }
})

// routing for know NHS number in the p5 journey

router.post('/p5/know-nhs-number', function (req, res) {

  // Make a variable and give it the value from 'know-nhs-number'
  var nhsNumber = req.session.data['know-nhs-number']

  // Check whether the variable matches a condition
  if (nhsNumber == "Yes") {
    // Send user to next page
    res.redirect('/p5/enter-nhs-number')
  } else {
    // Send user to ineligible page
    res.redirect('/p5/enter-name')
  }
})

// vsps-reg-p5-plugin routung for Know your NHS number

router.post('/p5/vsps-reg-p5-plugin/know-nhs-number', function (req, res) {

  // Make a variable and give it the value from 'know-nhs-number'
  var nhsNumber = req.session.data['know-nhs-number']

  // Check whether the variable matches a condition
  if (nhsNumber == "Yes") {
    // Send user to next page
    res.redirect('/p5/vsps-reg-p5-plugin/enter-nhs-number')
  } else {
    // Send user to ineligible page
    res.redirect('/p5/vsps-reg-p5-plugin/enter-name')
  }
})

// OTP route for new users
router.post('/set-up/alt-OTP-solution-new-user/register-OTP-route', function (req, res) {

  // Make a variable and give it the value from 'register-OTP-route'
  var otpRoute = req.session.data['otp-route']

  // Check whether the variable matches a condition
  if (otpRoute == "email") {
    // Send user to the email OTP page
    res.redirect('/set-up/alt-OTP-solution-new-user/email-route-alert')
  } else {
    // Send user to the SMS OTP page
    res.redirect('/set-up/alt-OTP-solution-new-user/register-enter-phone')
  }
})

// Know NHS number route for demo prototype branch

router.post('/p5/demo/know-nhs-number', function (req, res) {

  // Make a variable and give it the value from 'know-nhs-number'
  var nhsNumber = req.session.data['know-nhs-number']

  // Check whether the variable matches a condition
  if (nhsNumber == "Yes") {
    // Send user to next page
    res.redirect('/p5/demo/enter-nhs-number')
  } else {
    // Send user to ineligible page
    res.redirect('/p5/demo/enter-name')
  }
})

// p5 to p9 uplift - know NHS number route

router.post('/p5/p5-p9-uplift/know-nhs-number', function (req, res) {

  // Make a variable and give it the value from 'know-nhs-number'
  var nhsNumber = req.session.data['know-nhs-number']

  // Check whether the variable matches a condition
  if (nhsNumber == "Yes") {
    // Send user to next page
    res.redirect('/p5/p5-p9-uplift/enter-nhs-number')
  } else {
    // Send user to ineligible page
    res.redirect('/p5/p5-p9-uplift/enter-name')
  }
})

// p5 to p9 uplift confirm your details page radio buttons

router.post('/p5/p5-p9-uplift/user-profile', function (req, res) {
  
  // Make a variable and give it the value from 'confirm-details-radio'
  var confDetails = req.session.data['confirm-details-radio']

  //Check whether the variable matches a condition below
  if (confDetails == "yes") {
    // Send user to start of PYI journey
    res.redirect('https://nhs-cid.herokuapp.com/service-access/v22/service-access-start?service=app6&serviceName=the%20NHS%20app&devMode=false&emailAddress=undefined&mobileNum=&idType=undefined&formerror=undefined&hidehead=undefined&reason=pyi&result=undefined&manual=undefined&hideBack=true&uplift=true')
  } else if (confDetails == "no") {
    res.redirect('/p5/errors/error-p5-p9-uplift-hc-wrong-details')
  } else if (confDetails == "incorrect") {
    res.redirect('/p5/errors/error-p5-p9-uplift-hc-incorrect-details')
  }
})


router.post('/p5/errors/error-radio-no-input', function (req, res) {

  // Make a variable and give it the value from 'know-nhs-number'
  var nhsNumber = req.session.data['know-nhs-number']

  // Check whether the variable matches the following condition
  if (nhsNumber == "Yes") {
    // Redirect user to this page
    res.redirect('/p5/demo/enter-nhs-number')
  } else {
    // Redirect user to this page
    res.redirect('/p5/demo/enter-name')
  }
})

router.get('/help/prototypes', function (req, res) {
  let commitDate = {};
  request('https://api.github.com/repos/wshepworth/nhs-login/commits/master', {
    json: true,
    headers: {
      'User-Agent': 'wshepworth'
    }
  }, (err, res, body) => {
    if (err) {
      console.error(err);
    }
    commitDate = body.commit.author.date;
    console.log(commitDate);

  });
  console.log(commitDate);
  return res.render('help/prototypes', {
    'commitDate': commitDate
  });
})

module.exports = router;

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


// Clear all session data
router.get('/clear-data', (req, res) => {
  req.session.data = {}
  res.redirect('/index')
})