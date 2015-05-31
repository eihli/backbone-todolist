var MainView = Backbone.View.extend({
  className: 'main-container',

  initialize: function(){
    this.listenTo(this, 'showNewListForm', this.createListViewRender);

    this.createListViewRender();
  },

  createListViewRender: function() {
    this.createListView = new CreateListView({model: this.model});
    this.listenTo(this.createListView, 'newListAdded', this.showList);
    this.$el.html(this.createListView.$el);
  },

  showList: function(e) {
    this.createListView.remove();
    this.listView = new ListView({model: e});
    this.$el.html(this.listView.$el);
  },

});