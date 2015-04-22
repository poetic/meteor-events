Meteor.publish('users', function(){
  return Users.find();
});

Meteor.publish('events', function(){
  return Events.find();
});

Meteor.publish('event', function(eventId){
  return Events.find({ _id: eventId });
});
