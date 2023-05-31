function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Simulate login validation
    if (username === "admin" && password === "admin") {
      alert("Login successful!");
      // Redirect to home.html
      window.location.href = "home.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  
    return false; // Prevent form submission
  }
  
  function logout() {
    alert("Logout successful!");
    // Redirect to login.html
    window.location.href = "login.html";
  }
  
  function register() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Simulate registration
    alert("Registration successful!");
  
    // Redirect to login.html
    window.location.href = "login.html";
  
    return false; // Prevent form submission
  }  