$(document).ready(function() {
    // click event  for submit button
    $('#submitBtn').on('click', function() {
   
        submitValidation();
       
    });
    // form field validation
    function submitValidation() {
      
        const username = $('#username').val();
        const email = $('#inputEmail').val();
        const pnumber = $('#inputphonenumber').val();
       
        const male = $('#male');
        const female = $('#female');
        const country = $('#country').val();
        const checkbox = $('#flexCheckChecked');
  
        if (userfunction(username)) {
            if (emailfunction(email)) {
                if (phonefunction(pnumber)) {
                     if (genderfunction(male, female)) {
                                    if (countryfunction(country)) {
                                        if (boxfunction(checkbox)) {
            
                                            const modal = document.getElementById("successModal");
                                           
                                            var name = $("#username").val();
                                            
                                          $("#nu").text("Thank You "+name+" for giving "+ rat() + " Stars.");
                                          modal.style.display = "block";
                                     
                                        }
                                        //   } else {
                                        // } 
                                    } else {
                                        $('#checkErr').css('display', 'none');
                                     
                                    }
                                } else {
                                    $('#countryErr').css('display', 'none');
                                    $('#country').css('borderColor', 'black');
                                }
                            
                    
                } else {
                   
                    $('#genderErr').css('display', 'none');
                    $('#countryErr').css('display', 'none');
                    $('#country').css('borderColor', 'black');
                }
            } else {
                $('#phonenumberErr').css('display', 'none');
                $('#inputphonenumber').css('borderColor', 'black');
                
                $('#genderErr').css('display', 'none');
                $('#country').css('borderColor', 'black');
                $('#checkErr').css('display', 'none');
                $('#flexCheckChecked').css('borderColor', 'black');
            }
        } else {
            $('#emailErr').css('display', 'none');
            $('#inputEmail').css('borderColor', 'black');
            $('#phonenumberErr').css('display', 'none');
            $('#inputphonenumber').css('borderColor', 'black');
            
            $('#genderErr').css('display', 'none');
            $('#male').css('borderColor', 'black');
            $('#female').css('borderColor', 'black');
            $('#country').css('borderColor', 'black');
            $('#countryErr').css('display', 'none');
            $('#checkErr').css('display', 'none');
            $('#flexCheckChecked').css('borderColor', 'black');
        }
    }
  // user field
    function userfunction(username) {
        if (username.length <= 3 || /\d/.test(username)) {
            $('#username').css('borderColor', 'red');
            $('#usernameErr').css('display', 'block');
            userCheck = false;
            return false;
        } else {
            $('#username').css('borderColor', 'green');
            $('#usernameErr').css('display', 'none');
            userCheck = true;
            return true;
        }
    }
  // email field
    function emailfunction(email) {
        const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (emailPattern.test(email)) {
            $('#inputEmail').css('borderColor', 'green');
            $('#emailErr').css('display', 'none');
            emailCheck = true;
            return true;
        } else {
            $('#inputEmail').css('borderColor', 'red');
            $('#emailErr').css('display', 'block');
            emailCheck = false;
            return false;
        }
    }
  // phone field
    function phonefunction(pnumber) {
        const pnumberpattern = /^[6-9]\d{9}$/;
        if (pnumberpattern.test(pnumber)) {
            $('#inputphonenumber').css('borderColor', 'green');
            $('#phonenumberErr').css('display', 'none');
            phoneCheck = true;
            return true;
        } else {
            $('#inputphonenumber').css('borderColor', 'red');
            $('#phonenumberErr').css('display', 'block');
            phoneCheck = false;
            return false;
        }
    }

  
   
  // gender
    function genderfunction(male, female) {
      
        if (male.is(':checked') || female.is(':checked')) {
            $('#genderErr').css('display', 'none');
            mfCheck = true;
            return true;
        } else {
            $('#genderErr').css('display', 'block');
            mfCheck = false;
            return false;
        }
    }
  // country
    function countryfunction(country) {
      console.log("country:", country);
      console.log("country type:", typeof country);
  
      if (country === null) {
        $('#country').css('borderColor', 'red');
        $('#countryErr').css('display', 'block');
        countryCheck = false;
        return false;
      } else {
         
          $('#country').css('borderColor', 'green');
          $('#countryErr').css('display', 'none');
          countryCheck = true;
          return true;
      }
  }
  // checkbox
    function boxfunction(checkbox) {
        if (!checkbox.is(':checked')) {
            checkbox.css('borderColor', 'red');
            $('#checkErr').css('display', 'block');
            check = false;
            return false;
        } else {
            checkbox.css('borderColor', 'green');
            $('#checkErr').css('display', 'none');
            check = true;
            return true;
        }
    }
  
  });
  function fun(){
    const modal = document.getElementById("successModal");
    modal.style.display = "none";
    location.reload();
  }
//   star
  let m = 0;
    $(document).ready(function() {
      $("#st1").hover(function() {
          $(".fa-star").css("color", "black");
          $("#st1").css("color", "yellow");
        m=1;
      });
      $("#st2").hover(function() {
          $(".fa-star").css("color", "black");
          $("#st1, #st2").css("color", "yellow");
          m=2;
      });
      $("#st3").hover(function() {
          $(".fa-star").css("color", "black")
          $("#st1, #st2, #st3").css("color", "yellow");
           m=3;
      });
      $("#st4").hover(function() {
          $(".fa-star").css("color", "black");
          $("#st1, #st2, #st3, #st4").css("color", "yellow");
           m=4;
      });
      $("#st5").hover(function() {
          $(".fa-star").css("color", "black");
          $("#st1, #st2, #st3, #st4, #st5").css("color", "yellow");
           m=5;
      });
    });
  function rat(){
   
    return m;
  }
  