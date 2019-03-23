import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailFormService {

  constructor() {
    document.addEventListener("DOMContentLoaded", this.loaded, false);
   }

    validEmail(email) {
      var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return re.test(email);
    }
  
    validateHuman(honeypot) {
      if (honeypot) {  //if hidden form filled up
        console.log("Robot Detected!");
        return true;
      } else {
        console.log("Welcome Human!");
      }
    }
  
    // get all data in form and return object
    getFormData(form) {
      var elements = form.form.elements;
  
      var fields = Object.keys(elements).filter(function(k) {
            return (elements[k].name !== "honeypot");
      }).map(function(k) {
        if(elements[k].name !== undefined) {
          return elements[k].name;
        // special case for Edge's html collection
        }else if(elements[k].length > 0){
          return elements[k].item(0).name;
        }
      }).filter(function(item, pos, self) {
        return self.indexOf(item) == pos && item;
      });

      var formMetaData: FormMetaData;

      fields.forEach(function(name){
        var element = elements[name];
        
        // singular form elements just have one value
        formMetaData[name] = element.value;
  
        // when our element has multiple items, get their values
        if (element.length) {
          var data = [];
          for (var i = 0; i < element.length; i++) {
            var item = element.item(i);
            if (item.checked || item.selected) {
              data.push(item.value);
            }
          }
          formMetaData[name] = data.join(', ');
        }
      });
  
      // add form-specific values into the data
      formMetaData.formDataNameOrder = JSON.stringify(fields);
      formMetaData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
      formMetaData.formGoogleSendEmail = form.dataset.email || ""; // no email by default
  
      console.log(formMetaData);
      return formMetaData;
    }
  
   handleFormSubmit(event) {  // handles form submit without any jquery
      event.preventDefault();           // we are submitting via xhr below
      var form = event.target;
      var data = this.getFormData(form);         // get the values submitted in the form
  
      /* OPTION: Remove this comment to enable SPAM prevention, see README.md
      if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
        return false;
      }
      */
  
      if( data.email && !this.validEmail(data.email) ) {   // if email is not valid show error
        var invalidEmail = form.querySelector(".email-invalid");
        if (invalidEmail) {
          invalidEmail.style.display = "block";
          return false;
        }
      } else {
        this.disableAllButtons(form);
        var url = form.action;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        // xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            console.log(xhr.status, xhr.statusText);
            console.log(xhr.responseText);
            form.reset();
            var formElements = form.querySelector(".form-elements")
            if (formElements) {
              formElements.style.display = "none"; // hide form
            }
            var thankYouMessage = form.querySelector(".thankyou_message");
            if (thankYouMessage) {
              thankYouMessage.style.display = "block";
            }
            return;
        };
        // url encode form data for sending as post data
        var encoded = Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        xhr.send(encoded);
      }
    }
    
    loaded() {
      console.log("Contact form submission handler loaded successfully.");
      // bind to the submit event of our form
      var forms = document.querySelectorAll("form.gform");
      for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener("submit", this.handleFormSubmit, false);
      }
    };
  
    disableAllButtons(form) {
      var buttons = form.querySelectorAll("button");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }
}

interface FormMetaData {
  formDataNameOrder,
  formGoogleSheetName,
  formGoogleSendEmail,
  email
};

interface FormData {

};
