// External dependencies
const express = require('express');
const router = express.Router();
// const notify = require('notifications-node-client').NotifyClient;
const request = require('request');

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
  if (nhsNumber == "yes") {
    // Send user to next page
    res.redirect('/p5/demo/enter-dob')
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

// research session thur24-fri25-sep20 - know NHS number route

router.post('/research-prototypes/thur24-fri25-sep20/p5-first-attempt/know-nhs-number', function (req, res) {

  // Make a variable and give it the value from 'know-nhs-number'
  var nhsNumber = req.session.data['know-nhs-number']

  // Check whether the variable matches a condition
  if (nhsNumber == "Yes") {
    // Send user to next page
    res.redirect('/research-prototypes/thur24-fri25-sep20/p5-first-attempt/enter-nhs-number')
  } else {
    // Send user to ineligible page
    res.redirect('/research-prototypes/thur24-fri25-sep20/p5-first-attempt/enter-name')
  }
})

// research session thur24-fri25-sep20 - know NHS number route

router.post('/research-prototypes/thur24-fri25-sep20/p5-second-attempt/know-nhs-number', function (req, res) {

  // Make a variable and give it the value from 'know-nhs-number'
  var nhsNumber = req.session.data['know-nhs-number']

  // Check whether the variable matches a condition
  if (nhsNumber == "Yes") {
    // Send user to next page
    res.redirect('/research-prototypes/thur24-fri25-sep20/p5-second-attempt/enter-nhs-number')
  } else {
    // Send user to ineligible page
    res.redirect('/research-prototypes/thur24-fri25-sep20/p5-second-attempt/enter-name')
  }
})

// research session thur24-fri25-sep20 - know NHS number route

router.post('/research-prototypes/thur24-fri25-sep20/p5-third-attempt/know-nhs-number', function (req, res) {

  // Make a variable and give it the value from 'know-nhs-number'
  var nhsNumber = req.session.data['know-nhs-number']

  // Check whether the variable matches a condition
  if (nhsNumber == "Yes") {
    // Send user to next page
    res.redirect('/research-prototypes/thur24-fri25-sep20/p5-third-attempt/enter-nhs-number')
  } else {
    // Send user to ineligible page
    res.redirect('/research-prototypes/thur24-fri25-sep20/p5-third-attempt/enter-name')
  }
})

// p5 to p9 uplift research - idv mobile number

router.post('/research-prototypes/idv-p5-uplift/p5/know-nhs-number', function (req, res) {

  // Make a variable and give it the value from 'know-nhs-number'
  var nhsNumber = req.session.data['know-nhs-number']

  // Check whether the variable matches a condition
  if (nhsNumber == "yes") {
    // Send user to next page
    res.redirect('/research-prototypes/idv-p5-uplift/p5/enter-dob')
  } else {
    // Send user to ineligible page
    res.redirect('/research-prototypes/idv-p5-uplift/p5/enter-name')
  }
})

// p5 to p9 uplift confirm your details page radio buttons - idv mobile number

router.post('/research-prototypes/idv-p5-uplift/p5-p9-uplift/user-profile', function (req, res) {
  
  // Make a variable and give it the value from 'confirm-details-radio'
  var confDetails = req.session.data['confirm-details-radio']

  //Check whether the variable matches a condition below
  if (confDetails == "yes") {
    // Send user to start of PYI journey
    res.redirect('/research-prototypes/idv-p5-uplift/p5-p9-uplift/prove-who-you-are')
  } else if (confDetails == "no") {
    res.redirect('/research-prototypes/idv-p5-uplift/p5-p9-uplift/error-p5-p9-uplift-hc-wrong-details')
  } else if (confDetails == "incorrect") {
    res.redirect('/research-prototypes/idv-p5-uplift/p5-p9-uplift/error-p5-p9-uplift-hc-incorrect-details')
  }
})

// p5 to p9 uplift prove who you are radio buttons - idv mobile number

router.post('/research-prototypes/idv-p5-uplift/p5-p9-uplift/prove-who-you-are', function (req, res) {

  // Make a variable and give it the value from 'prove who you are'
  var whoAreYou = req.session.data['who-you-are-radio']

  // Check whether the variable matches a condition
  if (whoAreYou == "yes") {
    // Send user to next page
    res.redirect('/research-prototypes/idv-p5-uplift/p5-p9-uplift/auth')
  } else {
    // Send user to ineligible page
    res.redirect('/research-prototypes/idv-p5-uplift/p5-p9-uplift/auth')
  }
})  

// p5 to p9 uplift your number radio buttons - idv mobile number

router.post('/research-prototypes/idv-p5-uplift/p5-p9-uplift/your-mobile-phone-number', function (req, res) {

  // Make a variable and give it the value from 'your number'v
  var yourNumber = req.session.data['your-number']

  // Check whether the variable matches a condition
  if (yourNumber == "yes") {
    // Send user to next page
    res.redirect('/research-prototypes/idv-p5-uplift/p5-p9-uplift/register-enter-OTP')
  } else {
    // Send user to ineligible page
    res.redirect('/research-prototypes/idv-p5-uplift/p5-p9-uplift/confirmed-details')
  }
})  

// p5 to p9 uplift confirm your details page radio buttons

router.post('/p5/p5-p9-uplift/user-profile', function (req, res) {
  
  // Make a variable and give it the value from 'confirm-details-radio'
  var confDetails = req.session.data['confirm-details-radio']

  //Check whether the variable matches a condition below
  if (confDetails == "yes") {
    // Send user to start of PYI journey
    res.redirect('https://nhs-cid.herokuapp.com/service-access/v22/service-access-start?service=app6&serviceName=the%20NHS%20app&devMode=false&uplift=true')
  } else if (confDetails == "no") {
    res.redirect('/p5/errors/error-p5-p9-uplift-hc-wrong-details')
  } else if (confDetails == "incorrect") {
    res.redirect('/p5/errors/error-p5-p9-uplift-hc-incorrect-details')
  }
})

// P9 uplift option after 3 failed P5 attempts (demo branch of the P5 prototype)

router.post('/p5/errors/p9-uplift-option', function (req, res) {

  // Make a variable and give it the value from p9-uplift-option-radio
  var p9UpliftOption = req.session.data['p9-uplift-option-radio']

  if (p9UpliftOption == "pyi") {
    // Send user to start of PYI journey
    res.redirect('https://nhs-cid.herokuapp.com/service-access/v22/service-access-start?service=app6&serviceName=the%20NHS%20app&devMode=false&hideBack=true&uplift=true')
  } else if (p9UpliftOption == "enter-details-again") {
    res.redirect('/p5/demo/know-nhs-number')
  }
})

// P9 uplift option after 3 failed P5 attempts (demo branch of the P5 prototype) for thur24-fri25-sep20 research prototype

router.post('/research-prototypes/thur24-fri25-sep20/p5-third-attempt/p9-uplift-option', function (req, res) {

  // Make a variable and give it the value from p9-uplift-option-radio
  var p9UpliftOption = req.session.data['p9-uplift-option-radio']

  if (p9UpliftOption == "pyi-id") {
    // Send user to start of PYI journey
    res.redirect('https://nhs-cid.herokuapp.com/service-access/v22/service-access-start?service=app6&serviceName=the%20NHS%20app&devMode=false&hideBack=true&uplift=true')
  } else if (p9UpliftOption == "pyi-no-id") {
    res.redirect('https://nhs-cid.herokuapp.com/patient-online/v22/patient-online-details?serviceName=the%20NHS%20app&service=app6&devMode=false&uplift=true') 
  } else if (p9UpliftOption == "enter-details-again") {
    res.redirect('/research-prototypes/thur24-fri25-sep20/p5-first-attempt/know-nhs-number')
  }
})


// P5 Know NHS number page route

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