var Task = Backbone.Model.extend({
  defaults: {
    description: 'Blank Task',

  },

  initialize: function(desc) {
    this.set('description', desc);
  }

});