Template._eventsList.events({
  'click li': function(){
    var userId = Router.current().params.user_id;

    Router.go('events.show', { user_id: userId, event_id: this._id });
  }
});
