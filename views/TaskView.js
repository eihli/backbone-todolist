var TaskView = Backbone.View.extend({
  className: 'task',
  tagName: 'p',

  initialize: function(){
    this.render();
  },

  events: {
    'keyup' : 'edit',
    'click .complete-task' : 'completeTask'
  },

  render: function() {
    this.$el.empty();
    context = this.model.toJSON();
    var source = $('.task-template').html();
    var template = Handlebars.compile(source);
    this.$el.html(template(context));

  },

  edit: function(e) {
    this.model.set('description', $(e.target).val());
  },

  completeTask: function(e){
    // This accounts for the fact that e might register the div or the inner img
    if( $(e.target).hasClass('task-button-img') ){
      $(e.target).parent().parent().parent().slideUp(500);
    }
    else {
      $(e.target).parent().parent().slideUp(500);
    }

    setTimeout(function(){
      this.collection.remove(this.model);
    }.bind(this), 500);
    
  }
});