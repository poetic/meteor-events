EventsIndexController = ApplicationController.extend({
  waitOn: function(){
    Meteor.subscribe('events');
  },

  data: function(){
    var _id = this.params._id;

    return {
      upcomingEvents: function(){
        return Events.find({}, { sort: { 'activities.startTime': 1 } });
      },
      pastEvents: function(){
        return Events.find({}, { sort: { 'activities.startTime': 1 } });
      },
      rsvps: function(){
        return [];
      }
    };
  }
});
