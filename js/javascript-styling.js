$(document).ready(function(){
  // CreateListView
  $(document).on( "focusin", "#create-list-input", function() {
    $(this).attr('placeholder', '');
  });

  $(document).on( "focusout", "#create-list-input", function() {
    $(this).attr('placeholder', 'Enter List Name');
  });

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
  $(document).on("mouseup", "body", function(e){
    setTimeout(function(){
      var headerListID = $('.header').attr('list-id');
      if( !!headerListID ) {
        $('.sidebar-list').each(function(){
          if( $(this).attr('list-id') === headerListID ) {
            $(this).addClass('active');
            $(this).removeClass('inactive');
          }
          else {
            console.log("CHANGE");
            $(this).addClass('inactive');
            $(this).removeClass('active');
          }
        });
      }
    }, 1);
    
  });







});
