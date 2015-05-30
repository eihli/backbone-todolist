var List = Backbone.Model.extend({
  defaults: {
    tasks: [],
    name: "New List"

  },

  initialize: function() {
  },

  add: function(task) {
    this.get('tasks').push(task);
  }

});