//your JS code here. If required.
// Get the input field element by ID
const inputField = document.getElementById('fname');

// Add event listener for 'blur' event (when the input field loses focus)
inputField.addEventListener('blur', function() {
  // Convert the value in the input field to uppercase
  inputField.value = inputField.value.toUpperCase();
});
