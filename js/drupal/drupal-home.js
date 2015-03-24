(function($){
  var jsons = {
  	getLogin : function() {
      var setName = window.localStorage.getItem("username");
      var setEmail = window.localStorage.getItem("email");
      $('div.welcome-banner').append("<span>" + setName + "</span><br/>");
      $('div.welcome-banner').append("<span>" + setEmail + "</span>");
  	},
  };

  jsons.getLogin();
})(jQuery)