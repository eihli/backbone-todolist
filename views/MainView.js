var MainView = Backbone.View.extend({
  className: 'main-container',

  initialize: function(){
    this.listenTo(this, 'showNewListForm', this.createListViewRender);
    this.listenTo(this, 'showList', this.showList);

    this.createListViewRender();
  },

  createListViewRender: function() {
    this.createListView = new CreateListView({model: this.model});
    this.listenTo(this.createListView, 'newListAdded', this.showList);
    this.$el.html(this.createListView.$el);
  },

  showList: function(e) {
    //When you add a new view, remove whatever view was previously there
    if( this.createListView !== undefined) {
      this.createListView.remove();
    }
    else if( this.listView !== undefined) {
      this.listView.remove();
    }
    this.listView = new ListView({model: e});
    this.$el.html(this.listView.$el);
  },

});