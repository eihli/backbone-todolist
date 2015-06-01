var ListTasksView = Backbone.View.extend({
  className: 'list-tasks',

  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
    this.render();
  },

  events: {
  },

  render: function() {
    this.$el.empty();
    var task;
    this.collection.each(function(task){
      task = new TaskView({model: task});
      this.$el.append(task.$el);
    }.bind(this));



    // for (var i=0; i < tasks.length; i ++) {
    //   var html = "<p>" + tasks[i].description + "</p>";
    //   this.$el.append(html);
    // }

  },

  tasksRender: function() {

  }

  

});