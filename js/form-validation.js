$(document).ready(function(){
  // NEW LIST INPUT
  $('#new-list-input').on('focusin', function(){
    $(this).attr('placeholder', '');
  });

  $('#new-list-input').on('focusout', function(){
    $(this).attr('placeholder', 'Enter List Name');
  });

  $('#new-list-input').on('keyup', function(){
    if ($(this).val().length > 1) {
      $('#new-list-submit').css({
        'background-color': '#48a0de',
        'cursor': 'pointer'
      });
    }
    else{
      $('#new-list-submit').css({
        'background-color': '#A9A9A9',
        'cursor': 'auto'
      });
    }
  });


});
