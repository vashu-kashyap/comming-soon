const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const emailForm = document.getElementById("emailForm");
const helperText = document.getElementById("helper-text");
const errorIcon = document.getElementById("error-icon");
const heroImg = document.getElementById('heropic');

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userEmail = document.getElementById("user_Email").value;

  if (userEmail === "") {
    helperText.innerHTML = "Please fill in the email field.";
    helperText.classList.add("showError");
    errorIcon.classList.add("showError");
  } else if (emailRegex.test(userEmail)) {
    helperText.classList.remove("showError");
    errorIcon.classList.remove("showError");
  } else {
    helperText.classList.add("showError");
    errorIcon.classList.add("showError");
    helperText.innerHTML = "Please provide a valid email.";
  }
});

function updateImageSource() {
  const viewportWidth = window.innerWidth;
  
  if (viewportWidth <= 540) {
    heroImg.src = "./hero-mobile.jpg"; // New image for small devices
  } else {
    heroImg.src = "./hero-desktop.jpg"; // Default image for larger devices
  }
}

// Call the function initially and when the window is resized
updateImageSource();
window.addEventListener("resize", updateImageSource);
