
  function togglePassword() {
    var passwordInput = document.getElementById("password");
    var eyeIcon = document.getElementById("eye-icon");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.src = "eye.svg"; //  open eye icon
    } else {
      passwordInput.type = "password";
      eyeIcon.src = "eye.svg"; // closed eye icon
    }
  }
