var ListView = Backbone.View.extend({
  

  initialize: function(){
    this.render();
  },

  render: function() {
    var source = $('#list-template').html();
    var template = Handlebars.compile(source);
    this.$el = template();
  }

});