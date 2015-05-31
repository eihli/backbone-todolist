var MainView = Backbone.View.extend({
  className: 'main-container',

  initialize: function(){
    this.createListView = new CreateListView({model: this.model});

    this.listenTo(this.createListView, 'newListAdded', this.showList);

    this.createListViewRender();
  },

  createListViewRender: function() {
    this.$el.html([
      this.createListView.$el
    ]);
  },

  showList: function() {
    console.log("A");
  }

});