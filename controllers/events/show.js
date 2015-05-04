EventsShowController = ApplicationController.extend({
  waitOn: function(){
    var eventId = Router.current().params.event_id;

    Meteor.subscribe('users');
    Meteor.subscribe('event', eventId);
  },

  data: function(){
    var eventId = this.params.event_id;
    var routeParams = this.params.query;
    var initialSlide;

    if (_.has(routeParams, 'slides')) {
      initialSlide = routeParams.slides;
    }

    return {
      currentEvent: function(){
        return Events.findOne(eventId);
      },
      plannerNavOptions: {
        centeredSlides: true,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        initialSlide: initialSlide || 2,
      },
      plannerSlideOptions: {
        initialSlide: initialSlide || 2,
        threshold: 10,
      },
    };
  },
});
