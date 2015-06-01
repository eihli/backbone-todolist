var TaskView = Backbone.View.extend({
  className: 'task',
  tagName: 'p',

  initialize: function(){
    this.render();
  },

  events: {
  },

  render: function() {
    this.$el.empty();
    context = this.model.toJSON();
    var source = $('.task-template').html();
    var template = Handlebars.compile(source);
    this.$el.html(template(context));





    // this.$el.empty();
    // this.$el.html([
    //   this.listHeaderView.$el,
    //   this.createTaskView.$el,
    //   this.listTasksView.$el
    // ]);
  },

  // tasksRender: function() {
  //   if( this.listTasksView !== undefined ) {
  //     this.listTasksView.remove();
  //   }
    
  //   this.listenTo(this.listTasksView, 'taskAdded', this.render);
  //   console.log("A");
  // },

  test: function() {
    
  }
});