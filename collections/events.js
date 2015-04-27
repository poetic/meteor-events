Events = new Mongo.Collection('events');

Events.attachSchema(new SimpleSchema({
  user: {
    type: String,
  },
  coverPhoto: {
    type: String,
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  isPlusOne: {
    type: Boolean
  },
  hosts: {
    type: [HostSchema],
    defaultValue: [],
  },
  activities: {
    type: [ActivitySchema],
    defaultValue: [],
  },
  comments: {
    type: [CommentSchema],
    defaultValue: [],
  },
  guests: {
    type: [GuestSchema],
    defaultValue: [],
  },
}));

Events.helpers({
  eventStartTime: function(){
    var eventStartTime = _.first(_.sortBy(this.activities, 'startTime')).startTime;

    return moment(eventStartTime).format('dddd, MMM D YYYY, h:mm a');
  },
});
