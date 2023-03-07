const form = document.getElementById("survey-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const selectedClass = document.getElementById("dropdown").value.trim();
  const courseRating = document.querySelector('input[name="courseRating"]:checked');
  const teacherTeaching = document.querySelector('input[name="teacherTeaching"]:checked');
  const help = document.querySelector('input[name="help"]:checked');
  const satisfaction = document.querySelector('input[name="satisfaction"]:checked');

  let isFormValid = true;

  if (name === "") {
    alert("Please enter your name.");
    isFormValid = false;
  }

  if (email === "") {
    alert("Please enter your email address.");
    isFormValid = false;
  } else if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    isFormValid = false;
  }

  if (phone === "") {
    alert("Please enter your phone number.");
    isFormValid = false;
  } else if (!isValidPhone(phone)) {
    alert("Please enter a valid phone number.");
    isFormValid = false;
  }

  if (selectedClass === "") {
    alert("Please select a class.");
    isFormValid = false;
  }

  if (!courseRating) {
    alert("Please select a course rating.");
    isFormValid = false;
  }

  if (!teacherTeaching) {
    alert("Please select a teacher teaching rating.");
    isFormValid = false;
  }

  if (!help) {
    alert("Please select a help rating.");
    isFormValid = false;
  }

  if (!satisfaction) {
    alert("Please select a satisfaction rating.");
    isFormValid = false;
  }

  if (isFormValid) {
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Phone: " + phone);
    console.log("Class: " + selectedClass);
    console.log("Course Rating: " + courseRating.value);
    console.log("Teacher Teaching: " + teacherTeaching.value);
    console.log("Help: " + help.value);
    console.log("Satisfaction: " + satisfaction.value);

    alert("Thank you for submitting the survey!");
    form.reset();
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
   const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}
