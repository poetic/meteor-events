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
      }
    };
  }
});
