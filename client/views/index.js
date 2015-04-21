Template.Index.events({
  'click li': function(){
    Router.go('events.index', { user_id: this._id });
  }
});
