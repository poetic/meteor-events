EventsIndexController = ApplicationController.extend({
  data: function(){
    var _id = this.params._id;

    return {
      upcomingEvents: function(){
        return Events.find({ user: _id }, { sort: { 'activities.startTime': 1 } });
      },
      pastEvents: function(){
        return Events.find({ user: _id }, { sort: { 'activities.startTime': 1 } });
      },
      rsvps: function(){
        return [];
      }
    };
  }
});
