Events = new Mongo.Collection('events');

Events.attachSchema(new SimpleSchema({
  user: {
    type: String,
    optional: true,
  },
  coverPhoto: {
    type: String
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
    type: [HostSchema]
  },
  activities: {
    type: [ActivitySchema]
  },
  comments: {
    type: [CommentSchema]
  },
}));
