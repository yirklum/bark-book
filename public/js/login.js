//add jquery for the login page
$(document).ready(function() {
    var loginForm = $("form.login");
    var emailInput = $("input#email");
    var passwordInput = $("input#password");
  
    loginForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
  
      loginUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
  
    function loginUser(email, password) {
      $.post("/api/login", {
        email: email,
        password: password
      }).then(function(data) {
        window.location.replace(data);
      }).catch(function(err) {
        console.log(err);
      });
    }
  
  });

  $(document).ready(function() {
    var signUpForm = $("form.signup");
    var emailInput = $("input#email");
    var passwordInput = $("input#password");
  
    signUpForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
      console.log(userData);
      if (!userData.email || !userData.password) {
        return;
      }
      signUpUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
  
    function signUpUser(email, password) {
      $.post("/api/signup", {
        email: email,
        password: password
      }).then(function(data) {
        window.location.replace(data);
      }).catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });
  

