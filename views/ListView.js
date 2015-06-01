var ListView = Backbone.View.extend({
  className: 'list-container',

  initialize: function(){
    this.initialRender();
    // this.taskFormRender();
  },

  events: {
  },

  initialRender: function() {
    console.log(this.model);
    context = this.model.toJSON();
    var source = $('.list-template').html();
    var template = Handlebars.compile(source);
    this.$el.html(template(context));
  },

  // taskFormRender: function() {
  //   this.createTaskForm = new CreateTaskView();
  // },

  tasksRender: function() {

  }

  

});