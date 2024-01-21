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
  
var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)