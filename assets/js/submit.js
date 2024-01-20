function submitForm() {
  // Get form data
  var formData = new FormData(document.getElementById("myForm"));


  // Send the form data to the server using fetch
  fetch("http://localhost:3000/submit-form", {
    method: "POST",
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("success").style.display = "block";
      document.getElementById("err").style.display = "none";
      document.getElementById("load").style.display = "none";
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission
  submitForm(); // Call your form submission function
});

