var Task = Backbone.Model.extend({
  defaults: {
    description: 'Blank Task',
    date: '06/01/2015'

  },

  initialize: function(desc) {
    this.set('description', desc);
  }

});