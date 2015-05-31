var CreateListView = Backbone.View.extend({
  className: 'list-container',

  initialize: function(){
    this.render();
  },

  events: {
    'click #new-list-submit': 'addNewList',
  },

  render: function() {
    var source = $('#list-template').html();
    var template = Handlebars.compile(source);
    this.$el.html(template());
  },

  addNewList: function(e) {
    e.preventDefault();
    var newListName = $('#new-list-input').val()
    if (newListName.length > 0) {
      var newList = new List({name: newListName});
      this.model.get('lists').add(newList);
      console.log(this.model.get('lists'));
      this.trigger('newListAdded', newList);
    }
    
  }

});