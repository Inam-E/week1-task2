const form= document.getElementsById("simple-form")	
 const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const phoneInput = document.getElementById("phone");
      const genderInput = document.getElementById("gender");
      const passwordInput = document.getElementById("password");
      const emailError = document.getElementById("email-error");

      form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!nameInput.value.trim()) {
          nameInput.classList.add("error-field");
        } else {
          nameInput.classList.remove("error-field");
        }

        if (!emailInput.value.trim()) {
          emailInput.classList.add("error-field");
          emailError.textContent = "Email is required";
        } else if (!isValidEmail(emailInput.value.trim())) {
          emailInput.classList.add("error-field");
          emailError.textContent = "Invalid email format";
        } else {
          emailInput.classList.remove("error-field");
          emailError.textContent = "";
        }

        if (!phoneInput.value.trim()) {
          phoneInput.classList.add("error-field");
        } else {
          phoneInput.classList.remove("error