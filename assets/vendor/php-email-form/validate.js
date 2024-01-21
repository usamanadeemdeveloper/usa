function submitForm() {
  // Reset previous messages
  document.querySelector('.error-message').textContent = '';
  document.querySelector('.sent-message').textContent = '';

  // Validate the form fields (add more validation if needed)
  let form = document.getElementById('myForm');
  if (form.checkValidity()) {
    // Show the loader
    document.querySelector('.loading').style.display = 'block';

    // Disable the submit button during submission
    document.querySelector('button').disabled = true;

    // Simulate a delay (you can remove this setTimeout in production)
    setTimeout(function () {
      // Hide the loader
      document.querySelector('.loading').style.display = 'none';

      // Show the success message
      document.querySelector('.sent-message').style.display = 'block';
      document.querySelector('.sent-message').innerHTML = 'Your message has been sent successfully';

      // Re-enable the submit button
      document.querySelector('button').disabled = false;
      form.submit();
    }, 2000); // 2000 milliseconds (2 seconds) - Adjust as needed

  } else {
    // If validation fails, show an error message
    document.querySelector('.error-message').textContent =
      'Please fill in all fields.';
  }
}