function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "usern@me" && password == "p@ssword") {
    alert("Correct! Now on to Challenge Three!")
    window.location.href = "/HTML-Hacking/beginner/challenge-three"
  } else {
    alert("Incorrect username or password")
  }
}