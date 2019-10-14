// ES6 or Vanilla JavaScript


// reveal password script

function myFunction() {
    var x = document.getElementsByName("revealPassword");
    x.forEach(function(item) {
      if (item.type === "password") {
        item.type = "text";
      } else {
        item.type = "password";
      }
    });
  }


function setUpButton(button, input) {
  var form = document.createElement('form');
  if ('checkValidity' in form && 'querySelector' in document && 'classList' in document.documentElement) {

      // toggle password field between type="text" and type="password"
      var togglePasswordButton = document.querySelector(button);

      if (togglePasswordButton) {
          var togglePasswordButtonText = togglePasswordButton.querySelector('b');
          var passwordField = document.querySelector(input);
          togglePasswordButton.removeAttribute('hidden');


          togglePasswordButton.addEventListener('click', function() {
              var isPressed = JSON.parse(this.getAttribute('aria-pressed'));

              if (isPressed) {
                  passwordField.setAttribute('type', 'password');
                  this.setAttribute('aria-pressed', false);
                  togglePasswordButtonText.textContent = "Show"
              } else {
                  passwordField.setAttribute('type', 'text');
                  this.setAttribute('aria-pressed', true);
                  togglePasswordButtonText.textContent = "Hide"
              }
          });
      }
  }
}

setUpButton('[data-toggle-password]', '[data-toggle-password-field]')
setUpButton('[data-toggle-password-confirm]', '[data-toggle-password-field-confirm]')