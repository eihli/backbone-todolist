var ListHeaderView = Backbone.View.extend({
  className: 'header',
  tagName: 'h1',

  initialize: function(){
    this.render();
  },


  render: function() {
    this.$el.html(this.model.get('name'));
  },

});