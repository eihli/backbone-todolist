var SideBarView = Backbone.View.extend({
  className: 'sidebar-container',

  initialize: function(){
    this.listenTo(this.collection, 'add remove', this.render);
    this.render();
  },

  events: {
    'click .sidebar-list': 'showList',
    'click #sidebar-new-list': 'showNewListForm'
  },

  render: function() {
    this.$el.empty();
    context = this.collection.toJSON();
    var source = $('.sidebar-template').html();
    var template = Handlebars.compile(source);
    this.$el.html(template(context));
  },

  showNewListForm: function() {
    this.trigger('showNewListForm', this);
  },

  showList: function(e) {
    var list = this.collection.find(function(model) { return model.get('cid') == $(e.target).attr('list-id'); });
    this.trigger('showList', list);


  }

});