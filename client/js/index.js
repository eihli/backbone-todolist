$(document).ready(function(){
  $('#sign-up-form-container').hide();

  $('.sign-up').click(function(){
    $('#sign-in-form-container').hide();
    $('#sign-up-form-container').show();
  });
  $('.sign-in').click(function(){
    $('#sign-up-form-container').hide();
    $('#sign-in-form-container').show();
  });
});
