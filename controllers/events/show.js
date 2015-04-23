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
    };
  },
});
