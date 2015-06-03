$(document).ready(function(){
  // CREATE LIST FORM DESIGN
  $(document).on( "focusin", "#create-list-input", function() {
    $(this).attr('placeholder', '');
  });

  $(document).on( "focusout", "#create-list-input", function() {
    $(this).attr('placeholder', 'Enter List Name');
  });

  // CREATE LIST FORM VALIDATION
  $(document).on( "keyup", "#create-list-input", function() {
    if ($(this).val().length > 1) {
      $('#create-list-submit').css({
        'background-color': '#48a0de',
        'cursor': 'pointer'
      });
    }
    else{
      $('#create-list-submit').css({
        'background-color': '#A9A9A9',
        'cursor': 'auto'
      });
    }
  });

  // HIGHLIGHTS ACTIVE SIDEBAR TAB
  $(document).on("mouseup keydown", "body", function(){
    setTimeout(function(){
      var headerListID = $('.header').attr('list-id');
      if( !!headerListID ) {
        $('.sidebar-list').each(function(){
          if( $(this).attr('list-id') === headerListID ) {
            $(this).addClass('active');
            $(this).removeClass('inactive');
          }
          else {
            $(this).addClass('inactive');
            $(this).removeClass('active');
          }
        });
      }
    }, 1);    
  });

  // REMOVES SIDEBAR TAB HIGHLIGHT WHEN CREATE NEW LIST IS CLICKED
  $(document).on("mouseup", "#sidebar-new-list", function(){
    $('.sidebar-list').each(function() {
      $(this).addClass('inactive');
      $(this).removeClass('active');
    });
  });


  // CRETE TASK FORM
  $(document).on("click", "#create-task-submit", function(){
    $('#create-task-input').val("");
  });
});
