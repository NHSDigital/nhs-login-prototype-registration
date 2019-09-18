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