EventsIndexController = ApplicationController.extend({
  waitOn: function(){
    Meteor.subscribe('events');
  },

  data: function(){
    var userId = this.params.user_id;

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
        initialSlide: 1,
      },
      slideOptions: {
        initialSlide: 1,
      },
    };
  }
});
