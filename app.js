const formElm = document.querySelector('#form');
const nameElm = document.querySelector('#name');
const userNameElm = document.querySelector('#username');
const phoneNumberElm = document.querySelector('#phonenumber')
const emailELm= document.querySelector('#email');
const passwordElm = document.querySelector('#password');
const confirmPasswordElm = document.querySelector('#confirmpassword');


//Show Error Message;
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success outline;
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Email Validation;
//function isValidEmail(emailElm){
   
    // const regex = /\S+@\S+\.\S+/;
    //return regex.test(String(emailElm).toLowerCase());
    // return regex.test(email)
;
//}

//phone number validation
// phoneNumberElm.addEventListener('#phonenumber', () => {
//     phoneNumber.setCustomValidity('');
//     phoneNumber.checkValidity();
//   });
  
//   phoneNumberElm.addEventListener('invalid', () => {
//     if(phoneNumber.value === '') {
//       phoneNumber.setCustomValidity('Enter phone number!');
//     } else {
//       phoneNumberElm.setCustomValidity('Enter phone number in this format: 123-456-7890');
//     }
//   });

//Email Validation;
function checkEmailElm (input){
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(input.value.trim())){
        showSuccess(input);
    }
    else{
        showError(input,"Email is not valid");
    }
}
// check name validation;
function checkNameLength (input){
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    if(nameRegex.test(input.value.trim())){
        showSuccess(input);  
    }
    else{
        showError(input,"Name is not valid");
    }
}
// check required;
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()===''){
            showError(input, `${getFieldName(input)} is required`);
        }
      
        else{
            showSuccess(input);
        }
    })
}

// check name input length;
// function checkNameLength(input){
//     if(input.value.length < 8 ){
//         showError(input, `${getFieldName(input)} Please Your Name Length At Least 8 characters`);
// }
  
    // else{
    //     showError(input);
    // }
//}

// Check input length;
function checkLength(input, min, max){
    if(input.value.length <min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
 
    }
    else if(input.value.length > max){
       showError(input, ` ${getFieldName(input)} must be less than ${max} characters`);     
    }
    else{
        showSuccess(input);
    }
}
// Get field Name;
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check Password Match;
function checkPasswordMatch(password1 , password2){
    if(password1.value !== password2.value){
        showError(password1,"Password do not match");
        showError(password2,"Password do not match");
    }
     
}
// Event listener;
form.addEventListener('submit',function(e){
    e.preventDefault();
    checkRequired([nameElm,userNameElm,email,passwordElm,confirmPasswordElm]);
    checkNameLength(nameElm);
    checkLength(userNameElm, 3, 15);
    checkLength(passwordElm , 6, 25);
    checkEmailElm(email)
;
    checkPasswordMatch(passwordElm , confirmPasswordElm);
})