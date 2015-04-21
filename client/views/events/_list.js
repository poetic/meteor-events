Template._eventsList.events({
  'click li': function(){
    var userId = Router.current().params._id;

    Router.go('events.show', { _id: userId, event_id: this._id });
  }
});
