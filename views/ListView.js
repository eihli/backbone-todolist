var ListView = Backbone.View.extend({
  className: 'list-container',

  initialize: function(){
    this.render();
  },

  events: {
  },

  render: function() {
    this.$el.empty();
    context = this.model.toJSON();
    var source = $('.list-template').html();
    var template = Handlebars.compile(source);
    this.$el.html(template(context));
  },

  

});