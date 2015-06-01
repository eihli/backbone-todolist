var CreateTaskView = Backbone.View.extend({
  className: 'create-task-container',

  initialize: function(){
    this.render();
  },

  events: {
    
  },

  render: function() {
    var source = $('.create-list-template').html();
    var template = Handlebars.compile(source);
    this.$el.html(template());
  },

  addNewTask: function(e) {
    // e.preventDefault();
    // var newTaskName = $('#create-list-input').val();
    // if (newListName.length > 0) {
    //   var newList = new List({name: newListName});
    //   this.model.get('lists').add(newList);
    //   this.trigger('newListAdded', newList);
    // }
    
  }

});