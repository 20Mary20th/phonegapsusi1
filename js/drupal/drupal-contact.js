(function($){
  var jsons = {
    inquiry : function() {
    $('button.main-na').on('click', function() {

      // get all fields
      var webform_fields = $(this).parent().parent().find('.webform-field');
      // console.log(webform_fields);

      // create a object and store the value of each webform fields
      var webform_fields_obj = {};
      webform_fields.each(function(e) {
        var item = $(this).attr('name');
        var cid = $(this).data('cid');
        var value = $(this).val();
        webform_fields_obj[item] = {'cid':cid,'value':value};
      });

      webform_fields_obj.webform_id = $(this).data('webform');

      // var setUserID = window.localStorage.getItem("user-id");
      // webform_fields_obj.user_id = setUserID;

      var $data = webform_fields_obj;

      // sending data to custom module
      var inquiry = $data;
      console.log(inquiry);
        $.ajax({
          url: 'http://local.susiwebsite.com/mobile-contact-us',
          type : 'post',
          data :  inquiry,
          success : function(data) {
            console.log(data);
          }
        });
  });
  },

  };
  jsons.inquiry();
})(jQuery)
