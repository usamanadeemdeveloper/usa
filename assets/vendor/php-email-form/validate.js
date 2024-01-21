// /**
// * PHP Email Form Validation - v3.6
// * URL: https://bootstrapmade.com/php-email-form/
// * Author: BootstrapMade.com
// */
// (function () {
//     "use strict";
//     let forms = document.querySelectorAll('.php-email-form');
  
//     forms.forEach( function(e) {
//       e.addEventListener('submit', function(event) {
//         event.preventDefault();
  
//         let thisForm = this;
//         debugger
//         let action = thisForm.getAttribute('action');
//         let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
        
//         if( ! action ) {
//           debugger
//           displayError(thisForm, 'The form action property is not set!');
//           return;
//         }
//         debugger
//         thisForm.querySelector('.loading').classList.add('d-block');
//         thisForm.querySelector('.error-message').classList.remove('d-block');
//         thisForm.querySelector('.sent-message').classList.remove('d-block');
  
//         let formData = new FormData( thisForm );
  
//         if ( recaptcha ) {
//           debugger
//           if(typeof grecaptcha !== "undefined" ) {
//             grecaptcha.ready(function() {
//               try {
//                 grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
//                 .then(token => {
//                   formData.set('recaptcha-response', token);
//                   php_email_form_submit(thisForm, action, formData);
//                 })
//               } catch(error) {
//                 displayError(thisForm, error);
//               }
//             });
//           } else {
//             displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
//           }
//         } else {
//           php_email_form_submit(thisForm, action, formData);
//         }
//       });
//     });
  
//     function php_email_form_submit(thisForm, action, formData) {
//       fetch(action, {
//         method: 'POST',
//         body: formData,
//         headers: {'X-Requested-With': 'XMLHttpRequest'}
//       })
//       .then(response => {
//         if( response.ok ) {
//           debugger
//           return response.text();
//         } else {
//           debugger
//           throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
//         }
//       })
//       .then(data => {
//         thisForm.querySelector('.loading').classList.remove('d-block');
//         if (data.trim() == 'OK') {
//           debugger
//           thisForm.querySelector('.sent-message').classList.add('d-block');
//           thisForm.reset(); 
//         } else {
//           debugger
//           throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
//         }
//       })
//       .catch((error) => {
//         displayError(thisForm, error);
//       });
//     }
  
//     function displayError(thisForm, error) {
//       thisForm.querySelector('.loading').classList.remove('d-block');
//       thisForm.querySelector('.error-message').innerHTML = error;
//       thisForm.querySelector('.error-message').classList.add('d-block');
//     }
  
//   })();
  
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.php-email-form');

  form.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.querySelector('textarea[name="message"]').value;

      // Basic validation - add more as needed
      if (!name || !email || !subject || !message) {
          displayError('Please fill in all fields.');
          return;
      }

      // If you need additional client-side validation, you can add it here

      // If all validation passes, submit the form
      // You may choose to submit the form here or proceed with further actions
      form.submit();
  });

  function displayError(errorMessage) {
      const errorContainer = document.querySelector('.error-message');
      errorContainer.textContent = errorMessage;
      errorContainer.classList.add('d-block');
  }
});
