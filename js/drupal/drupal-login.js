(function($){
  var jsons = {
    login : function() {
      $('div.profile-pic').addClass('hide');
      $('h1.profile-name').addClass('hide');
      $('h1.profile-logout').addClass('hide');
      $('a.btnLogin').on('click', function() {
        console.log('work!');
        var username = $('input#name').val();
        var password = $('input#password').val();

        if (!username) {
          alert('Enter your username!');
        }
       
        else if (!password) {
          alert('Enter your password!');
        }

        else {
          $.ajax({
            url : 'http://local.susiwebsite.com/mobdev1/user/login.json',
            type : 'post',
            data : 'username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password),
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
                console.log('username and password works!');
                // Waiting for Phonegap to Load [Documentation : 'http://docs.phonegap.com/en/1.2.0/phonegap_storage_storage.md.html#localStorage']
                document.addEventListener("deviceready", jsons.redirect(loginName, loginEmail), false);
              }
          });
        return false;
        }
      });
    },

    redirect : function(name, email) {
      window.localStorage.setItem("username", name);
      window.localStorage.setItem("email", email);
      /* This will now be the local storage for the values of name and email */
      var setName = window.localStorage.getItem("username");
      var setEmail = window.localStorage.getItem("email");
        $.ajax({
          url: 'menu.html',
          context : document.body,
          success : function(responseText) {
            $('body').load('menu.html', function() {
              $('div.profile-pic').addClass('show');
              $('h1.profile-name').addClass('show');
              $('h1.profile-logout').addClass('show');
            });
          }
        });
      },
    };
   
  jsons.login();

})(jQuery)