Template.EventsListing.events({
  'click li': function(){
    var userId = Router.current().params._id;
    var route;

    if (userId === this.user) {
      route = 'events.show.planning';
    } else {
      route = 'events.show.attending';
    }

    Router.go(route, { _id: userId, event_id: this._id });
  }
});
