EventsShowController = ApplicationController.extend({
  data: function(){
    var routeParams = Router.current().params;
    var eventId = routeParams.event_id;

    return Events.findOne(eventId);
  }
});
