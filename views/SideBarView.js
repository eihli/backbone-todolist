var SideBarView = Backbone.View.extend({
  className: 'sidebar-container',

  initialize: function(){
    this.listenTo(this.collection, 'add remove', this.render);
    this.render();
  },

  events: {
    // 'click .sidebar-list': 'sideTest',
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
  }

});