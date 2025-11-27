/* scripts for not allowing text in number field */


function isNumber(evt) {
   evt = (evt) ? evt : window.event;
   var charCode = (evt.which) ? evt.which : evt.keyCode;
   if ( (charCode > 31 && charCode < 48) || charCode > 57) {
       return false;
   }
   return true;
}






// login page validation

$(function(){

        $("#fusername_error_message").hide();
        $("#fpassword_error_message").hide();
    
        var error_fusername = false;
        var error_fpassword = false;
    
    
        $("#reg_username").focusout(function(){
            check_fusername();
         });
         $("#reg_pass").focusout(function() {
            check_fpassword();
         });
    
    
         function check_fusername() {
            var pattern = /^[a-zA-Z0-9]+$/;
            var fusername = $("#reg_username").val();
            if ( fusername.length = 0 || fusername.length < 5 ) {

               $("#fusername_error_message").html("Should atleast contain 5 Characters");
               $("#fusername_error_message").show();
               $("#reg_username").css("border-bottom","2px solid #F90A0A");
               error_fusername = true;
            } else {
               $("#fusername_error_message").hide();
               $("#reg_username").css("border-bottom","2px solid #34F458");

            }
            
            
            
            if (pattern.test(fusername) && fusername !== '') {
               $("#fusername_error_message").hide();
               $("#reg_username").css("border-bottom","2px solid #34F458");
            } else {
               $("#fusername_error_message").html("Should contain only Characters");
               $("#fusername_error_message").show();
               $("#reg_username").css("border-bottom","2px solid #F90A0A");
               error_fusername = true;
            }
         }
    
         function check_fpassword() {
            var password_length = $("#reg_pass").val().length;
            if (password_length < 6) {
               $("#fpassword_error_message").html("Atleast 6 Characters");
               $("#fpassword_error_message").show();
               $("#reg_pass").css("border-bottom","2px solid #F90A0A");
               error_fpassword = true;
            } else {
               $("#fpassword_error_message").hide();
               $("#reg_pass").css("border-bottom","2px solid #34F458");
            }
         }
         $("#login_form").submit(function() {
            error_fusername = false;
            error_fpassword = false;
    
            check_fusername();
            check_fpassword();
 
    
            if (error_fusername === false && error_fpassword === false) {
               return true;
            } else {
               Swal.fire('Fill the fields correctly')
               return false;
            }
    
    
         });
    })



// register form validation

         $(function () {

            $("#first_error_message").hide();
            $("#last_error_message").hide();
            $("#email_error_message").hide();
            $("#username_error_message").hide();
            $("#phone_error_message").hide();
            $("#password_error_message").hide();
            $("#confirmpassword_error_message").hide();

            let error_firstname = false;
            let error_lastname = false;
            let error_email = false;
            let error_username = false;
            let error_phonenumber = false;
            let error_password = false;
            let error_retype_password = false;

            // ------------------- First Name -------------------
            $("#id_first_name").focusout(function () {
               let fname = $("#id_first_name").val();
               let pattern = /^[a-zA-Z]+$/;

               if (pattern.test(fname)) {
                     error_firstname = false;
                     $("#first_error_message").hide();
                     $("#id_first_name").css("border-bottom", "2px solid #34F458");
               } else {
                     error_firstname = true;
                     $("#first_error_message").html("Should contain only letters").css("color", "#F90A0A").show();
                     $("#id_first_name").css("border-bottom", "2px solid #F90A0A");
               }
            });

            // ------------------- Last Name -------------------
            $("#id_last_name").focusout(function () {
               let lname = $("#id_last_name").val();
               let pattern = /^[a-zA-Z]+$/;

               if (pattern.test(lname)) {
                     error_lastname = false;
                     $("#last_error_message").hide();
                     $("#id_last_name").css("border-bottom", "2px solid #34F458");
               } else {
                     error_lastname = true;
                     $("#last_error_message").html("Should contain only letters").css("color", "#F90A0A").show();
                     $("#id_last_name").css("border-bottom", "2px solid #F90A0A");
               }
            });

            // ------------------- Email -------------------
            $("#id_email").focusout(function () {
               let email = $("#id_email").val();
               let pattern = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;

               if (pattern.test(email)) {
                     error_email = false;
                     $("#email_error_message").hide();
                     $("#id_email").css("border-bottom", "2px solid #34F458");
               } else {
                     error_email = true;
                     $("#email_error_message").html("Invalid Email").css("color", "#F90A0A").show();
                     $("#id_email").css("border-bottom", "2px solid #F90A0A");
               }
            });

            // ------------------- Phone Number -------------------
            $("#id_phone_number").focusout(function () {
               let phone = $("#id_phone_number").val();
               let pattern = /^[0-9]{10}$/;

               if (pattern.test(phone)) {
                     error_phonenumber = false;
                     $("#phone_error_message").hide();
                     $("#id_phone_number").css("border-bottom", "2px solid #34F458");
               } else {
                     error_phonenumber = true;
                     $("#phone_error_message").html("Enter 10 digit phone number").css("color", "#F90A0A").show();
                     $("#id_phone_number").css("border-bottom", "2px solid #F90A0A");
               }
            });

            // ------------------- Username -------------------
            $("#id_username").focusout(function () {
               let uname = $("#id_username").val();
               let pattern = /^[a-zA-Z0-9]+$/;

               if (uname.length < 5) {
                     error_username = true;
                     $("#username_error_message").html("Minimum 5 characters").css("color", "#F90A0A").show();
                     $("#id_username").css("border-bottom", "2px solid #F90A0A");
               } else if (!pattern.test(uname)) {
                     error_username = true;
                     $("#username_error_message").html("Only letters/numbers allowed").css("color", "#F90A0A").show();
                     $("#id_username").css("border-bottom", "2px solid #F90A0A");
               } else {
                     error_username = false;
                     $("#username_error_message").hide();
                     $("#id_username").css("border-bottom", "2px solid #34F458");
               }
            });

            // ------------------- Password -------------------
            $("#id_password").focusout(function () {
               let password = $("#id_password").val();

               if (password.length < 6) {
                     error_password = true;
                     $("#password_error_message").html("Minimum 6 characters").css("color", "#F90A0A").show();
                     $("#id_password").css("border-bottom", "2px solid #F90A0A");
               } else {
                     error_password = false;
                     $("#password_error_message").hide();
                     $("#id_password").css("border-bottom", "2px solid #34F458");
               }
            });

            // ------------------- Confirm Password -------------------
            $("#id_confirm_password").focusout(function () {
               let pwd = $("#id_password").val();
               let cpwd = $("#id_confirm_password").val();

               if (cpwd === "") {
                     error_retype_password = true;
                     $("#confirmpassword_error_message").html("Cannot be empty").css("color", "#F90A0A").show();
                     $("#id_confirm_password").css("border-bottom", "2px solid #F90A0A");
               } else if (pwd !== cpwd) {
                     error_retype_password = true;
                     $("#confirmpassword_error_message").html("Passwords do not match").css("color", "#F90A0A").show();
                     $("#id_confirm_password").css("border-bottom", "2px solid #F90A0A");
               } else {
                     error_retype_password = false;
                     $("#confirmpassword_error_message").hide();
                     $("#id_confirm_password").css("border-bottom", "2px solid #34F458");
               }
            });

            // ------------------- FORM SUBMIT -------------------
            $("#register_form").submit(function () {

               // Call all validations again before submit
               $("#id_first_name").trigger("focusout");
               $("#id_last_name").trigger("focusout");
               $("#id_email").trigger("focusout");
               $("#id_username").trigger("focusout");
               $("#id_phone_number").trigger("focusout");
               $("#id_password").trigger("focusout");
               $("#id_confirm_password").trigger("focusout");

               if (
                     !error_firstname &&
                     !error_lastname &&
                     !error_email &&
                     !error_username &&
                     !error_phonenumber &&
                     !error_password &&
                     !error_retype_password
               ) {
                     return true;  // submit form
               } else {
                     Swal.fire("Fill all fields correctly");
                     return false; // block form
               }
            });
         });







/* scripts for not allowing text in number field */


function isNumber(evt) {
   evt = (evt) ? evt : window.event;
   var charCode = (evt.which) ? evt.which : evt.keyCode;
   if ( (charCode > 31 && charCode < 48) || charCode > 57) {
       return false;
   }
   return true;
}


       // Address Validation

       $(function(){

         $("#first_name_error_message").hide();
         $("#last_name_error_message").hide();
         $("#email_error_message").hide();
         $("#phone_number_error_message").hide();
         $("#address_error_message").hide();
         $("#city_error_message").hide();
         $("#post_code_error_message").hide();
         $("#country_error_message").hide();
         $("#state_error_message").hide();

         
   
   
     
         var error_firstname = false;
         var error_lastname = false;
         var error_email = false;
         var error_phone_number = false;
         var error_address = false;
         var error_city = false;
         var error_post_code = false;
         var error_country = false;
         var error_state = false;

   
     
     
         $("#user_first_name").focusout(function(){
            check_firstname();
          });
          $("#user_last_name").focusout(function() {
            check_lastname();
          });
          $("#user_email").focusout(function(){
            check_email();
         });
         $("#user_phone_number").focusout(function() {
            check_phone_number();
         });
         $("#user_address").focusout(function(){
            check_address();
         });
         $("#user_city").focusout(function() {
            check_city();
         });
         $("#user_post_code").focusout(function(){
            check_post_code();
         });
   
         $("#user_country").focusout(function(){
            check_country();
         });
         $("#user_state").focusout(function(){
            check_state();
         });
   
   
   
         function check_firstname() {
            var pattern = /^[a-zA-Z]*$/;
            var fname = $("#user_first_name").val();
            if (pattern.test(fname) && fname !== '') {
               $("#first_name_error_message").hide();
               $("#user_first_name").css("border-bottom","2px solid #34F458");
            } else {
               $("#first_name_error_message").html("Should contain only Characters").css("color","#F90A0A");
               $("#first_name_error_message").show();
               $("#user_first_name").css("border-bottom","2px solid #F90A0A");
               error_firstname = true;
            }
         }
         function check_lastname() {
            var pattern = /^[a-zA-Z]*$/;
            var fname = $("#user_last_name").val();
            if (pattern.test(fname) && fname !== '') {
               $("#last_name_error_message").hide();
               $("#user_last_name").css("border-bottom","2px solid #34F458");
            } else {
               $("#last_name_error_message").html("Should contain only Characters").css("color","#F90A0A");;
               $("#last_name_error_message").show();
               $("#user_last_name").css("border-bottom","2px solid #F90A0A");
               error_lastname = true;
            }
         }
         function check_email() {
            var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var email = $("#user_email").val();
            if (pattern.test(email) && email !== '') {
               $("#email_error_message").hide();
               $("#user_email").css("border-bottom","2px solid #34F458");
            } else {
               $("#email_error_message").html("Invalid Email").css("color","#F90A0A");;
               $("#email_error_message").show();
               $("#user_email").css("border-bottom","2px solid #F90A0A");
               error_email = true;
            }
         }
         function check_phone_number() {
            var pattern = /[0-9]/g;
            var phone = $("#user_phone_number").val();
            if (pattern.test(phone) && phone !== '' && phone.length == 10) {
               $("#phone_number_error_message").hide();
               $("#user_phone_number").css("border-bottom","2px solid #34F458");
            } else {
               $("#phone_number_error_message").html("The phone number must have 10 digit").css("color","#F90A0A");;
               $("#phone_number_error_message").show();
               $("#user_phone_number").css("border-bottom","2px solid #F90A0A");
               error_phone_number = true;
            }
         }
   
     
          function check_address() {
             var address = $("#user_address").val();
             if (address.length < 10) {
   
                $("#address_error_message").html("Should atleast contain 12 Characters").css("color","#F90A0A");
                $("#address_error_message").show();
                $("#user_address").css("border-bottom","2px solid #F90A0A");
                error_address = true;
             } else {
                $("#address_error_message").hide();
                $("#user_address").css("border-bottom","2px solid #34F458");
   
             }
             
          }
     
          function check_city() {
             var city = $("#user_city").val().length;
             if (city < 3 ) {
                $("#city_error_message").html("Atleast 3 Characters").css("color","#F90A0A");;
                $("#city_error_message").show();
                $("#user_city").css("border-bottom","2px solid #F90A0A");
                error_city = true;
             } else {
                $("#city_error_message").hide();
                $("#user_city").css("border-bottom","2px solid #34F458");
             }
          }
   
          function check_post_code() {
            var pattern = /[0-9]/g;
            var post_code = $("#user_post_code").val();
            if (pattern.test(post_code) && post_code.length == 6 && post_code.length != 0 ) {
               $("#post_code_error_message").hide();
               $("#user_post_code").css("border-bottom","2px solid #34F458");
            } else {
               $("#post_code_error_message").html("Post-code must contain 6 digit").css("color","#F90A0A");;
               $("#post_code_error_message").show();
               $("#user_post_code").css("border-bottom","2px solid #F90A0A");
               error_post_code = true;
            }
         }
   
         function check_country() {
            var pattern = /^[a-zA-Z]*$/;
            var country = $("#user_country").val();
            if (pattern.test(country) && country !== '') {
               $("#country_error_message").hide();
               $("#user_country").css("border-bottom","2px solid #34F458");
            } else {
               $("#country_error_message").html("Should contain only Characters").css("color","#F90A0A");;
               $("#country_error_message").show();
               $("#user_country").css("border-bottom","2px solid #F90A0A");
               error_country = true;
            }
         }

         function check_state() {
            var country = $("#user_state").val();
            if (country !== '') {
               $("#state_error_message").hide();
               $("#user_state").css("border-bottom","2px solid #34F458");
            } else {
               $("#state_error_message").html("Please select your state").css("color","#F90A0A");;
               $("#state_error_message").show();
               $("#user_state").css("border-bottom","2px solid #F90A0A");
               error_state = true;
            }
         }
         
          $("#address_form_id").submit(function() {
   
            error_firstname = false;
            error_lastname = false;
            error_email = false;
            error_phone_number = false;
            error_address = false;
            error_city = false;
            error_post_code = false;
            error_country = false;
            error_state = false;

   
         
     
             check_firstname();
             check_lastname();
             check_phone_number();
             check_email();
             check_address();
             check_city();
             check_post_code();
             check_country()
             check_state()
   

   
   
     
             if (error_firstname == false && error_lastname == false && error_email == false && error_phone_number == false && error_address == false && error_city == false && error_post_code == false && error_country == false && error_state == false) {
                return true;
             } else {
               Swal.fire('Fill the fields correctly')
               return false;
             }
     
     
          });
     })

     function isNumber(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ( (charCode > 31 && charCode < 48) || charCode > 57) {
          return false;
      }
      return true;
  }


  // Details upload validation


  function isText(evt) {
   evt = (evt) ? evt : window.event;
   var charCode = (evt.which) ? evt.which : evt.keyCode;
   if ( (  charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 12 )) {
       return false;
   }
   return true;
}


  $(function(){

   $("#first_name_error_message").hide();
   $("#last_name_error_message").hide();
   $("#user_email_error_message").hide();
   $("#username_error_message").hide();
   $("#phone_error_message").hide();


   var error_firstname = false;
   var error_lastname = false;
   var error_email = false;
   var error_username = false;
   var error_phonenumber = false;



   $("#first_name_id").focusout(function(){
      check_firstname();
    });
    $("#last_name_id").focusout(function() {
      check_lastname();
    });
    $("#user_email_id").focusout(function(){
      check_email();
   });
   $("#username_id").focusout(function() {
      check_username();
   });
   $("#phone_number_id").focusout(function(){
      check_phone_number();
   });

   function check_firstname() {
      var pattern = /^[a-zA-Z]*$/;
      var fname = $("#first_name_id").val();
      if (pattern.test(fname) && fname !== '') {
         $("#first_name_error_message").hide();
         $("#id_first_name").css("border-bottom","2px solid #34F458");
      } else {
         $("#first_name_error_message").html("Should contain only Characters").css("color","#F90A0A");
         $("#first_name_error_message").show();
         $("#id_first_name").css("border-bottom","2px solid #F90A0A");
         error_firstname = true;
      }
   }
   function check_lastname() {
      var pattern = /^[a-zA-Z]*$/;
      var fname = $("#last_name_id").val();
      if (pattern.test(fname) && fname !== '') {
         $("#last_name_error_message").hide();
         $("#id_last_name").css("border-bottom","2px solid #34F458");
      } else {
         $("#last_name_error_message").html("Should contain only Characters").css("color","#F90A0A");;
         $("#last_name_error_message").show();
         $("#id_last_name").css("border-bottom","2px solid #F90A0A");
         error_lastname = true;
      }
   }
   function check_email() {
      var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      var email = $("#user_email_id").val();
      if (pattern.test(email) && email !== '') {
         $("#user_email_error_message").hide();
         $("#id_email").css("border-bottom","2px solid #34F458");
      } else {
         $("#user_email_error_message").html("Invalid Email").css("color","#F90A0A");;
         $("#user_email_error_message").show();
         $("#id_email").css("border-bottom","2px solid #F90A0A");
         error_email = true;
      }
   }
   function check_phone_number() {
      var pattern = /[0-9]/g;
      var phone = $("#phone_number_id").val();
      if (pattern.test(phone) && phone !== '' && phone.length == 10) {
         $("#phone_error_message").hide();
         $("#id_phone_number").css("border-bottom","2px solid #34F458");
      } else {
         $("#phone_error_message").html("Invalid phone number").css("color","#F90A0A");;
         $("#phone_error_message").show();
         $("#id_phone_number").css("border-bottom","2px solid #F90A0A");
         error_phonenumber = true;
      }
   }


    function check_username() {
       var pattern = /^[a-zA-Z0-9]+$/;
       var fusername = $("#username_id").val();
       if ( fusername.length = 0 || fusername.length < 5 ) {

          $("#username_error_message").html("Should atleast contain 5 Characters").css("color","#F90A0A");;
          $("#username_error_message").show();
          $("#id_username").css("border-bottom","2px solid #F90A0A");
          error_username = true;
       } else {
          $("#username_error_message").hide();
          $("#id_username").css("border-bottom","2px solid #34F458");

       }
       
       
       
       if (pattern.test(fusername) && fusername !== '') {
          $("#username_error_message").hide();
          $("#id_username").css("border-bottom","2px solid #34F458");
       } else {
          $("#username_error_message").html("Should contain only Characters").css("color","#F90A0A");;
          $("#username_error_message").show();
          $("#id_username").css("border-bottom","2px solid #F90A0A");
          error_fusername = true;
       }
    }
   
    $("#edit_user_details_form_id").submit(function() {
       error_username = false;
       error_password = false;
       error_firstname = false;
       error_email = false;
       error_phonenumber = false;


       check_firstname();
       check_lastname();
       check_phone_number();
       check_email();
       check_username();



       if (error_username == false && error_firstname == false && error_phonenumber == false && error_email == false && error_lastname == false) {
          return true;
       } else {
         Swal.fire('Fill the fields correctly')
         return false;
       }


    });
})


