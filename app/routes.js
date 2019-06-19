// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// Have login
router.post('/v1/set-up/have-login', function (req, res) {

  // Make a variable and give it the value from 'know-nhs-number'
  var haveLogin = req.session.data['have-login']

  // Check whether the variable matches a condition
  if (haveLogin == "Yes"){
    // Send user to next page
    res.redirect('login')
  }
  else {
    // Send user to ineligible page
    res.redirect('create')
  }

})

module.exports = router;
