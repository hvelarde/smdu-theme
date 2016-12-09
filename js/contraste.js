$(function(){
  $(document).ready(function($) {
    var linkContraste = $("#linkAltoContraste");
    var body = $("body");
    linkContraste.click(function(event) {
      if($.cookie('contraste') === null){
        $.cookie('contraste', 'on');
        body.addClass('contraste');
        event.preventDefault();
      }else{
        if($.cookie('contraste') == 'on'){
          $.removeCookie('contraste');
          body.removeClass('contraste');
          event.preventDefault();
        }else{
          $.cookie('contraste', 'on');
          body.addClass('contraste');
          event.preventDefault();
        }
      }
    });

      if($.cookie('contraste') == 'on'){
        body.addClass('contraste');
        event.preventDefault();
      }
  });
});
