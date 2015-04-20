Template.Index.events({
  'click li': function(){
    Router.go('events.index', { _id: this._id });
  }
});
