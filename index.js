document.addEventListener("DOMContentLoaded", () => {
      const registrationForm = document.getElementById("registrationForm");
      const savedData = document.getElementById("savedData");

      // Load previously saved data from Local Storage
      const savedEntries = JSON.parse(localStorage.getItem("savedEntries")) || [];

      // Populate the table with saved data
      savedEntries.forEach(entry => {
        const newRow = savedData.insertRow();
        const nameCell = newRow.insertCell(0);
        const emailCell = newRow.insertCell(1);
        const passwordCell= newRow.insertCell(2);
        const dobCell = newRow.insertCell(3);
        const acceptedTermsCell = newRow.insertCell(4);

        nameCell.textContent = entry.name;
        emailCell.textContent = entry.email;
        passwordCell.textContent = entry.password;
        dobCell.textContent = entry.dob;
        acceptedTermsCell.textContent = entry.acceptedTerms ? "True" : "False";
      });

      registrationForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const dob = document.getElementById("dob").value;
        const acceptedTerms = document.querySelector('input[name="terms"]').checked;

        // Add new entry to savedEntries array
        savedEntries.push({ name, email, password, dob, acceptedTerms });
        
        // Save updated array to Local Storage
        localStorage.setItem("savedEntries", JSON.stringify(savedEntries));

        // Update the table
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
