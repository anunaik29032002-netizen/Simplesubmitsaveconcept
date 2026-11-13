document.addEventListener('DOMContentLoaded', function() {
const noteForm = document.getElementById('noteForm');
const userInput = document.getElementById('userInput');

// Frontend validation before submission
noteForm.addEventListener('submit', function(event) {
const textValue = userInput.value.trim();

if (textValue === "") {
alert("Please type something before submitting!");
event.preventDefault(); // Stops form submission if empty
}
});
});