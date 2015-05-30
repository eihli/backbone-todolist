var AppView = Backbone.View.extend({
  tagName: "body",

  initialize: function(){
    this.sideBarView = new SideBarView();
  },

  render: function() {
    return this.$el.html([
      this.sideBarView.$el
    ]);
    
  }

});