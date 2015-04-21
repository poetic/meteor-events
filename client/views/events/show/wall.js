Template.EventsShowWall.events({
  'submit .new-comment': function(event){
    event.preventDefault();

    var routeParams = Router.current().params;
    var eventId = routeParams.event_id

    var comment = {
      user: routeParams._id,
      body: event.target.comment.value,
    };

    Events.update({ _id: eventId }, { $push: { comments: comment } });

    event.target.comment.value = '';
  }
});
