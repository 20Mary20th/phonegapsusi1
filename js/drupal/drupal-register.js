(function($) {
  
  var jsons = { 
    register : function() {
      $('div.btn-reg').on('click', function() {
        var name = $('#fullname').val(),
            email = $('#email').val(),
            pass = $('#password1').val();

        var data = {'name':name, 'email':email, 'pass':pass}
        var register_fields = $(this).parent().parent().find('.register-field');
          $.ajax({
            url : 'http://local.susiwebsite.com/mobile-register-user',
            type : 'post',
            data: data,
            success : function(result) {
              console.log(result);
            }
          });
      });
    },
  };
  jsons.register();

})(jQuery)