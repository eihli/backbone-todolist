var MainView = Backbone.View.extend({
  className: 'main-container',

  initialize: function(){
    this.createListView = new CreateListView({model: this.model});

    this.listenTo(this.createListView, 'newListAdded', this.test);

    this.createListViewRender();
  },

  createListViewRender: function() {
    this.$el.html([
      this.createListView.$el
    ]);
  },

  test: function() {
    console.log("WORKING!");
    this.$el.empty();
  }

});