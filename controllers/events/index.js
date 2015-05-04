EventsIndexController = ApplicationController.extend({
  waitOn: function(){
    Meteor.subscribe('events');
  },

  data: function(){
    var userId = this.params.user_id;
    var routeParams = this.params.query;
    var initialSlide;

    if (_.has(routeParams, 'slides')) {
      initialSlide = routeParams.slides;
    }

    return {
      upcomingEvents: function(){
        return Events.find(
          { $or: [{ guests: { $in: [userId] } }, { user: userId }] },
          { sort: { 'activities.startTime': 1 } }
        );
      },
      pastEvents: function(){
        return Events.find(
          { $or: [{ guests: { $in: [userId] } }, { user: userId }] },
          { sort: { 'activities.startTime': 1 } }
        );
      },
      rsvps: function(){
        return [];
      },
      navOptions: {
        centeredSlides: true,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        touchRatio: 0.5,
        initialSlide: initialSlide || 1,
        runCallbacksOnInit: false,
      },
      slideOptions: {
        initialSlide: initialSlide || 1,
        runCallbacksOnInit: false,
      },
    };
  }
});
