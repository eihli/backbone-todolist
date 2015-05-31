var List = Backbone.Model.extend({
  defaults: {
    name: "New List"
  },

  initialize: function() {
    this.set('tasks', new TaskList());
  },

  add: function(task) {
    this.get('tasks').push(task);
  }

});