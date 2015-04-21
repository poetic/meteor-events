Template.EventsListing.events({
  'click li': function(){
    Router.go('events.show', { _id: this.user, event_id: this._id });
  }
});
