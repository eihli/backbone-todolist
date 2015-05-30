var AppView = Backbone.View.extend({
  tagName: "body",

  initialize: function(){
    this.sideBarView = new SideBarView();
    this.listView = new ListView();
  },

  render: function() {
    return this.$el.html([
      this.sideBarView.$el,
      this.listView.$el
    ]);
    
  }

});