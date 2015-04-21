Meteor.methods({
  addComment: function(eventId, comment){
    Events.update({ _id: eventId }, { $push: { comments: comment } });
  }
});
