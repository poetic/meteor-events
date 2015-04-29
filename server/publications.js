Meteor.publish('users', function(){
  return Meteor.users.find();
});

Meteor.publish('events', function(){
  return Events.find();
});

Meteor.publish('event', function(eventId){
  return Events.find({ _id: eventId });
});
