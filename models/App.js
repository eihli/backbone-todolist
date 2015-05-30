var App = Backbone.Model.extend({
  initialize: function() {
    this.set('lists', new AppLists());
  };

});