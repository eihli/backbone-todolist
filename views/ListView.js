var ListView = Backbone.View.extend({
  className: 'list-container',

  initialize: function(){
    this.listHeaderView = new ListHeaderView({model: this.model});
    this.createTaskView = new CreateTaskView({model: this.model});
    this.listTasksView = new ListTasksView({collection: this.model.get('tasks')});
    console.log(this);
    this.listenTo(this.model.get('tasks'), 'add', this.test);

    this.render();
  },

  events: {
  },

  render: function() {
    this.$el.empty();
    this.$el.html([
      this.listHeaderView.$el,
      this.createTaskView.$el,
      this.listTasksView.$el
    ]);
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