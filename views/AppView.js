var AppView = Backbone.View.extend({
  el: "body",

  initialize: function(){
    this.sideBarView = new SideBarView({collection: this.model.get('lists')});
    
    this.mainView = new MainView({model: this.model});
  },

  // events: {
  //   'click': 'testing'
  // },

  render: function() {
    this.$el.html([
      this.sideBarView.$el,
      this.mainView.$el
    ]);
  },

  // testing: function(){
  //   console.log("APPVIEW CLICK");
  // }

});