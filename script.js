let arr = [];
$('#inputs input').change(function() {
  if (this.checked) {
    arr.push(this.value);
  }
  else {
   arr.splice(arr.indexOf(this.value), 1);
  }
  $('#target').val(arr + '');
});


function validateForm() {
  let valid = true; // creates a boolean variable to return if the form's valid

  if (!validateField(this, 'name')) // validates the name
    valid = false;

  if (!validateField(this, 'email')) // validates the email
    valid = false;

  if (!validateField(this, 'telephone')) // validates the telephone
    valid = false;

  return valid; // if all the fields are valid, this variable will be true
}

function validateField(context, fieldName) { // function to dynamically validate a field by its name
  let field = document.forms['english_registration_form'][fieldName], // gets the field
      msg = 'Please enter your ' + fieldName, // dynamic message
      errorField = document.getElementById(fieldName + '_error'); // gets the error field
console.log(context);
  // if the context is the form, it's because the Register Now button was clicked, if not, check the caller
  if (context instanceof HTMLFormElement || context.id === fieldName)
    errorField.innerHTML = (field.value === '') ? msg : '';

  return field.value !== ''; // return if the field is fulfilled
}


document.addEventListener('DOMContentLoaded', function() { // when the DOM is ready
  // add event handlers when changing the fields' value
  document.getElementById('name').addEventListener('input', validateForm);
  document.getElementById('email').addEventListener('input', validateForm);
  document.getElementById('telephone').addEventListener('input', validateForm);

  // add the event handler for the submit event
  document.getElementById('english_registration_form').addEventListener('submit', validateForm);
});
