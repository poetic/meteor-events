EventsIndexController = ApplicationController.extend({
  data: function(){
    var _id = this.params._id;

    return {
      upcomingEvents: function(){
        return Events.find({ user: _id });
      },
      pastEvents: function(){
        return Events.find({ user: _id });
      },
      rsvps: function(){
        return [];
      }
    };
  }
});
