var List = Backbone.Model.extend({
  defaults: {
    tasks: [],

  },

  initialize: function() {
  },

  add: function(task) {
    this.get('tasks').push(task);
  }

});