Template.EventsShow.helpers({
  isPlanner: function(){
    return Router.current().params._id === this.user;
  }
});
