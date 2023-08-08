const registrationForm = document.getElementById('registrationForm');
  const userDataTable = document.getElementById('userDataTable').getElementsByTagName('tbody')[0];
  const termsCheckbox = document.getElementById('terms');
  const termsError = document.getElementById('termsError');

  registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Check if terms and conditions are accepted
    if (!termsCheckbox.checked) {
      termsError.style.display = 'block';
      return;
    } else {
      termsError.style.display = 'none';
    }

    const newRow = userDataTable.insertRow();
    newRow.insertCell().textContent = registrationForm.name.value;
    newRow.insertCell().textContent = registrationForm.email.value;
    newRow.insertCell().textContent = registrationForm.password.value;
    newRow.insertCell().textContent = registrationForm.dob.value;

    // Clear form fields after submission
    registrationForm.reset();
  });
