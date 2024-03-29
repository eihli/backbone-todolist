var ListView = Backbone.View.extend({
  className: 'list-container',

  initialize: function(){
    this.listHeaderView = new ListHeaderView({model: this.model});
    this.createTaskView = new CreateTaskView({model: this.model});
    this.listTasksView = new ListTasksView({collection: this.model.get('tasks')});
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

  test: function() {
    console.log(this.model.toJSON());
  }
});