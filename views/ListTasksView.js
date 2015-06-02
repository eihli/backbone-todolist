var ListTasksView = Backbone.View.extend({
  className: 'list-tasks',

  initialize: function(){
    this.listenTo(this.collection, 'add remove', this.render);

    this.render();
  },

  events: {
  },

  render: function() {
    this.$el.empty();
    var task;
    this.collection.each(function(task){
      task = new TaskView({model: task, collection: this.collection});
      this.$el.append(task.$el);
    }.bind(this));
  },
});