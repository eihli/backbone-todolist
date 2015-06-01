var CreateTaskView = Backbone.View.extend({
  className: 'create-task-container',

  initialize: function(){
    this.render();
  },

  events: {
    'click #create-task-submit': 'addNewTask'
  },

  render: function() {
    var source = $('.create-task-template').html();
    var template = Handlebars.compile(source);
    this.$el.html(template());
  },

  addNewTask: function(e) {
    e.preventDefault();
    var newTaskDescription = $('#create-task-input').val();
    if( !!newTaskDescription ){
      var newTask = new Task ({description: newTaskDescription});
      this.model.get('tasks').add(newTask);
      this.trigger('taskAdded', this);    
    }
  }

});