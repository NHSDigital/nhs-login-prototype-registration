// ES6 or Vanilla JavaScript


// reveal password script

function myFunction() {
    var x = document.getElementById("revealPassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }