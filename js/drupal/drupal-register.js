(function($) {
  var jsons = { 
    
    validating : function() {
      $('div.btn-reg').on('click', function() {
        var name = $('#fullname').val(),
            email = $('#email').val().trim(),
            pass = $('#password1').val().trim(),
            repeatpass = $('#password2').val().trim();

        var regex_name = /^[a-zA-Z_ ]*$/;
        var regex_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

        if (name == "") {
          alert('Enter your Full Name');
        }

        else if (email == "") {
          alert("Enter your Email Address");
        }
        
        else if (pass == "") {
          alert('Enter your Password!');
        }

        else if (repeatpass == "") {
          alert('Enter your Password!');
        }

        else if(!regex_name.test(name)) {
          alert('Please provide a better username');
        }

        else if (!regex_email.test(email)) {
          alert('Please provide a valid email address');
        }

        else {
          if (pass != repeatpass) {
            alert('The passwords you provided doesn\'t match. Retype it again');
          }
          else {
            jsons.register(name, email, pass);
          }
        }
      });
    },

    register : function(regName, regEmail, regPass) {
      var data = { 'name': regName, 'email': regEmail, 'pass': regPass }
      var register_fields = $(this).parent().parent().find('.register-field');
        $.ajax({
          url : 'http://local.susiwebsite.com/mobile-register-user',
          type : 'post',
          data: data,
          success : function(result) {
            console.log(result);
          }
        });
      },
  };
  jsons.validating();

})(jQuery)