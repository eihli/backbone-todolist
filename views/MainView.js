var MainView = Backbone.View.extend({
  className: 'main-container',

  initialize: function(){
    this.listenTo(this, 'showNewListForm', this.createListViewRender);
    this.listenTo(this, 'showList', this.showList);

    this.createListViewRender();
  },

  createListViewRender: function() {
    this.removeOldViews();
    this.createListView = new CreateListView({model: this.model});
    this.listenTo(this.createListView, 'newListAdded', this.showList);
    this.$el.html(this.createListView.$el);
  },

  showList: function(e) {
    this.removeOldViews();
    this.listView = new ListView({model: e});
    this.$el.html(this.listView.$el);
    console.log(this.$el);

  },

  removeOldViews: function() {
    //When you add a new view, remove whatever view was previously there
    if( this.createListView !== undefined ){
      this.createListView.remove();
    }
    else if( this.listView !== undefined ){
      this.listView.remove();
    }
  }

});