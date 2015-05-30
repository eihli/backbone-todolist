var SideBarView = Backbone.View.extend({
  

  initialize: function(){
    this.render();
  },

  render: function() {
    var source = $('#sidebar-template').html();
    var template = Handlebars.compile(source);
    this.$el = template();
  }

});