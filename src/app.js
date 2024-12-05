// Select the password input field
const passwordInput = document.querySelector("input");

// Define an object to track criteria statuses
const criteria = {
  lowerUpperCase: false,
  number: false,
  specialCharacter: false,
  minLength: false,
};

// validataion array
const ValidationData = [
  {
    icon: '<i class="ph ph-check-circle text-green-500"></i>',
    validationTxt: "Lowercase & Uppercase",
  },
  {
    icon: '<i class="ph ph-check-circle text-green-500"></i>',
    validationTxt: "Number (0-9)",
  },
  {
    icon: '<i class="ph ph-check-circle text-green-500"></i>',
    validationTxt: "Special Character",
  },
  {
    icon: '<i class="ph ph-check-circle text-green-500"></i>',
    validationTxt: "At least 8 Characters",
  },
];

// Function to update UI icons based on criteria
const updateUI = (criteria) => {
  document.getElementById("lowerUpperCase-icon").style.color =
    criteria.lowerUpperCase ? "green" : "red";
  document.getElementById("number-icon").style.color = criteria.number
    ? "green"
    : "red";
  document.getElementById("special-icon").style.color =
    criteria.specialCharacter ? "green" : "red";
  document.getElementById("minLength-icon").style.color = criteria.minLength
    ? "green"
    : "red";
};

// Function to update the progress bar
const updateProgressBar = (criteria) => {
  // Count the number of criteria met
  const criteriaCount = Object.values(criteria).filter(Boolean).length;

  // Calculate the progress percentage
  const progressPercentage =
    (criteriaCount / Object.keys(criteria).length) * 100;

  // Select the progress bar element
  const progressBar = document.getElementById("progress-bar");

  // Update the width of the progress bar
  progressBar.style.width = `${progressPercentage}%`;

  // Update the color of the progress bar based on criteria met
  if (criteriaCount === 1) {
    progressBar.style.backgroundColor = "red"; // 1 criteria met
  } else if (criteriaCount >= 2 && criteriaCount < 4) {
    progressBar.style.backgroundColor = "yellow"; // 2 or 3 criteria met
  } else if (criteriaCount === 4) {
    progressBar.style.backgroundColor = "green"; // All criteria met
  }
};

// Add an input event listener to the password field
passwordInput.addEventListener("input", (e) => {
  const inputValue = e.target.value;

  // Update criteria based on the user's input
  criteria.lowerUpperCase =
    /[a-z]/.test(inputValue) && /[A-Z]/.test(inputValue);
  criteria.number = /\d/.test(inputValue);
  criteria.specialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(inputValue);
  criteria.minLength = inputValue.length >= 8;

  // Update the UI with the new criteria status
  updateUI(criteria);

  // Update the progress bar
  updateProgressBar(criteria);

  console.log("User Input:", inputValue);
  console.log(criteria);
});


// Select the container where items will be added
const validationContainer = document.getElementById("validation-container");

// Render the validation data
ValidationData.forEach((item) => {
  const validationItem = document.createElement("div");
  validationItem.className = "flex items-center space-x-3";

  validationItem.innerHTML = `
    ${item.icon}
    <span class="text-gray-700">${item.validationTxt}</span>
  `;

  validationContainer.appendChild(validationItem);
});
