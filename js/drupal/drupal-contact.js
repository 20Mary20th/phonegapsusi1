(function($){
  var jsons = {
    inquiry : function() {
    $('button.main-na').on('click', function() {
      var fullname = $('input#full-name1').val();
      var emailadd = $('input#email-add1').val();
      var contactnum = $('input#contact-num1').val();
      var msg = $('textarea.message1').val();

      // Getting the username and email from login
      var setName = window.localStorage.getItem("username");
      var setEmail = window.localStorage.getItem("email");

      var inquiry = {'inq_name' : fullname, 'inq_email' : emailadd, 'inq_number': contactnum, 'inq_message' : msg };
        $.ajax({
          url: 'http://local.susiwebsite.com/inq',
          type : 'post',
          data :  inquiry,
          success : function(data) {
            console.log(data);
          }
        });
      });
    },

    reservation : function() {
      $('button.btn-reserve1').on('click', function() {
        var reservename = $('input#full-name2').val();
        var reservenum = $('input#contact-num2').val();
        var reserveguest = $('input#num-guests').val();
        var month = $('select#monthList option:selected').text();
        var day = $('select#dayList option:selected').text();
        var hour = $('select#hourList option:selected').text();
        var minutes = $('select#minList option:selected').text();
        var ampm = $('select#ampmList option:selected').text();
        var specialnotes = $('textarea.notes').val();
        
        var inquiry = {'res_name' : reservename, 'res_num' : reservenum, 'res_guests': reserveguest, 'res_month' : month, 'res_day' : day, 'res_hour' : hour, 'res_min' : minutes, 'res_ampm' : ampm, 'res_specialnotes' : specialnotes };
          $.ajax({
            url: 'http://local.susiwebsite.com/contact_reservation',
            type : 'post',
            data :  inquiry,
              success : function(data) {
                console.log(data);
              }
          });
      });
    }

  };
  jsons.inquiry();
  jsons.reservation();
})(jQuery)
