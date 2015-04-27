EventsShowController = ApplicationController.extend({
  waitOn: function(){
    var eventId = Router.current().params.event_id;

    Meteor.subscribe('users');
    Meteor.subscribe('event', eventId);
  },

  data: function(){
    var routeParams = Router.current().params;
    var eventId = routeParams.event_id;

    return {
      currentEvent: function(){
        return Events.findOne(eventId);
      },
      plannerNavOptions: {
        centeredSlides: true,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        initialSlide: 2,
      },
      plannerSlideOptions: {
        initialSlide: 2,
        threshold: 10,
      },
      guests: function(){
        var guestIds = Events.findOne(eventId).guests;

          // _id key has to be declared as a string for this to work.
          // this is probably related to how the user is stored
          // to the event in seeds.js
        return Users.find({ '_id': { $in: guestIds } });
      },
    };
  },
});
