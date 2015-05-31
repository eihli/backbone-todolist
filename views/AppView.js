var AppView = Backbone.View.extend({
  el: "body",

  initialize: function(){
    this.sideBarView = new SideBarView({collection: this.model.get('lists')});
    this.mainView = new MainView({model: this.model});

    this.listenTo(this.sideBarView , 'showNewListForm', this.showNewListForm);
    this.listenTo(this.sideBarView , 'showList', this.showList);


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

  showNewListForm: function() {
    this.mainView.trigger('showNewListForm', this);
  },

  showList: function(e) {
    
    this.mainView.trigger('showList', e);
  }

});