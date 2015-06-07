var CreateListView = Backbone.View.extend({
  className: 'create-list-container',

  initialize: function(){
    this.render();
  },

  events: {
    'click #create-list-submit': 'addNewList',
  },

  render: function() {
    var source = $('.create-list-template').html();
    var template = Handlebars.compile(source);
    this.$el.html(template());
  },

  addNewList: function(e) {
    e.preventDefault();
    var newListName = _.escape($('#create-list-input').val());
    if (newListName.length > 0) {
      var newList = new List({name: newListName});
      this.model.get('lists').add(newList);
      this.trigger('newListAdded', newList);
    }

    $.ajax({
      url: "127.0.0.1",
      type: 'GET',
      content: JSON.stingify({listName: "Test Request"}),
      contentType: 'application/json',
      success: function(data) {
        console.log("SUCCESS");
      },
      error: function(xhr, textStatus, error) {
        console.log(textStatus);
      }
    });
    
  }

});