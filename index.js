document.addEventListener("DOMContentLoaded", () => {
      const registrationForm = document.getElementById("registrationForm");
      const savedData = document.getElementById("savedData");

      registrationForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const dob = document.getElementById("dob").value;
        const acceptedTerms = document.querySelector('input[name="terms"]').checked;

        const dobDate = new Date(dob);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - dobDate.getFullYear();

        if (age < 18 || age > 55) {
          alert("Age must be between 18 and 55.");
          return;
        }

        const newRow = savedData.insertRow();
        const nameCell = newRow.insertCell(0);
        const emailCell = newRow.insertCell(1);
        const passwordCell= newRow.insertCell(2);
        const dobCell = newRow.insertCell(3);
        const acceptedTermsCell = newRow.insertCell(4);

        nameCell.textContent = name;
        emailCell.textContent = email;
        passwordCell.textContent = password;
        dobCell.textContent = dob;
        acceptedTermsCell.textContent = acceptedTerms ? "True" : "False";

        registrationForm.reset();
      });
    });
