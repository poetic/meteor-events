EventsIndexController = ApplicationController.extend({
  data: {
    upcomingEvents: function(){
      var currentTime = new Date()

      return Events.find({
        date: { $gte: currentTime }
      });
    },
    pastEvents: function(){
      var currentTime = new Date()

      return  Events.find({
        date: { $lt: currentTime }
      });
    }
  },
});
