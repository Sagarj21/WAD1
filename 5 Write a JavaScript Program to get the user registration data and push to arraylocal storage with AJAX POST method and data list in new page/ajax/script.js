function register(event) {
    event.preventDefault();
  
    // Get user registration data
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    var userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };
  
    // Send user registration data to server using AJAX POST method
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://example.com/register", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(userData));
  
    // Store user registration data in array or local storage
    var registeredUsers = [];
  
    // Check if local storage is supported
    if (typeof(Storage) !== "undefined") {
      // Get existing registered users from local storage
      if (localStorage.getItem("registeredUsers")) {
        registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
      }
  
      // Add new user to the array
      registeredUsers.push(userData);
  
      // Store the updated array in local storage
      localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
    } else {
      // Fallback to using an array if local storage is not supported
      registeredUsers.push(userData);
    }
  
    // Redirect to the data page
    window.location.href = "data.html";
  }
  
  // Display user registration data in the data page
  window.onload = function() {
    var userDataList = document.getElementById("userDataList");
  
    // Check if local storage is supported
    if (typeof(Storage) !== "undefined") {
      // Get registered users from local storage
      if (localStorage.getItem("registeredUsers")) {
        var registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
  
        // Iterate over registered users and create data list options
        for (var i = 0; i < registeredUsers.length; i++) {
          var user = registeredUsers[i];
          var option = document.createElement("option");
          option.value = user.firstName + " " + user.lastName + " (" + user.email + ")";
          userDataList.appendChild(option);
        }
      }
    } else {
      // Fallback to displaying data from the array if local storage is not supported
      var registeredUsers = []; // Use your array name here
  
      // Iterate over registered users and create data list options
      for (var i = 0; i < registeredUsers.length; i++) {
        var user = registeredUsers[i];
        var option = document.createElement("option");
        option.value = user.firstName + " " + user.lastName + " (" + user.email + ")";
        userDataList.appendChild(option);
      }
    }
  };
  