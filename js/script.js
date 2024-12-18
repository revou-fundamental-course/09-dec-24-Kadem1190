document.addEventListener("DOMContentLoaded", () => {
  let currentSlideIndex = 0; 
  const slides = document.querySelectorAll('.mySlides');
  const totalSlides = slides.length;

  const hideSlides = () => {
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
  };

  const showNextSlide = () => {
    hideSlides(); 
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides; 
    slides[currentSlideIndex].classList.add('active'); 
  };

  slides[currentSlideIndex].classList.add('active');
  setInterval(showNextSlide, 3500); 
});


document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("inquiryForm");
      form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const interestInput = document.getElementById("interest");
      const error = document.createElement("p");
  
      clearErrors();
  
      function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
      }
  
      function showError(input, message) {
        error.className = "error-message";
        error.style.color = "red";
        error.innerText = message;
        input.style.borderColor = "red";
        input.parentElement.appendChild(error);
      }
  
      function clearErrors() {
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach((msg) => msg.remove());
        document
          .querySelectorAll("#inquiryForm input, #inquiryForm select")
          .forEach((input) => (input.style.borderColor = ""));
      }
  
      let isValid = true;
  
      if (nameInput.value.trim() === "") {
        showError(nameInput, "Name is required.");
        isValid = false;
      }
  
      if (emailInput.value.trim() === "" || !validateEmail(emailInput.value)) {
        showError(emailInput, "Enter a valid email address.");
        isValid = false;
      }
  
      if (interestInput.value === "") {
        showError(interestInput, "Please select an interest.");
        isValid = false;
      }
  
      if (isValid) {
        alert(`Thank you, ${nameInput.value}! We will contact you soon.`);
        this.submit();
      }
    });
});
  