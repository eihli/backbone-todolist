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
    var newListName = $('#create-list-input').val();
    if (newListName.length > 0) {
      var newList = new List({name: newListName});
      this.model.get('lists').add(newList);
      this.trigger('newListAdded', newList);
    }
    
  }

});