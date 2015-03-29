(function($){
  var jsons = {
    login : function() {
      $('div.profile-pic').addClass('hide');
      $('h1.profile-name').addClass('hide');
      $('h1.profile-logout').addClass('hide');
      $('a.btnLogin').on('click', function() {
        console.log('work!');
        var user_email = $('input#name').val();
        var password = $('input#password').val();

        if (!user_email) {
          alert('Enter your username!');
        }
       
        else if (!password) {
          alert('Enter your password!');
        }

        else {
         
          $.ajax({
            url : 'http://local.susiwebsite.com/json-users',
            type : 'post',
            dataType : 'json',
              success : function(result) {
                var result_len = result.nodes.length;
                  for (var a = 0; a < result_len ; a++) {
                    var getName = result.nodes[a].node['Name'];
                    var getEmail = result.nodes[a].node['E-mail'];
                    if (user_email == getEmail) {
                      var user = getName;
                    }
                  }
                
                $.ajax({
                  url : 'http://local.susiwebsite.com/mobdev1/user/login.json',
                  type : 'post',
                  data : 'username=' + encodeURIComponent(user) + '&password=' + encodeURIComponent(password),
                  dataType : 'json',
                    error : function(XMLHTTPRequest, textStatus, errorThrown) {
                      alert('Either username and password is invalid. Try Again');
                      console.log(JSON.stringify(XMLHTTPRequest));
                      console.log(JSON.stringify(textStatus));
                      console.log(JSON.stringify(errorThrown));
                    },

                    success : function(result) {
                      var loginName = result.user.name;
                      var loginEmail = result.user.mail;
                   // Waiting for Phonegap to Load [Documentation : 'http://docs.phonegap.com/en/1.2.0/phonegap_storage_storage.md.html#localStorage']
                  // document.addEventListener("deviceready", jsons.redirect(loginName, loginEmail), false);
                  }
                  });
              } // end 1st success function
          });
        return false;
        } // end of else statement
      });
    },

    redirect : function(name, email) {
      window.localStorage.setItem("username", name);
      window.localStorage.setItem("email", email);
      /* This will now be the local storage for the values of name and email */
      var setName = window.localStorage.getItem("username");
      var setEmail = window.localStorage.getItem("email");
      $('h1.user-name').removeClass('not-login').html('Hello! ' + setName);
      $('span.avatar48').removeClass('not-login');
      $('a.navLogin').addClass('logged-in');
      $('h1.profile-logout').removeClass('not-login').css({'display' : 'block'});
      window.location = "home.html";
    },
  };
   
  jsons.login();
})(jQuery)