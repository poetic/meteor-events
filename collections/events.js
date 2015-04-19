Events = new Mongo.Collection('events');

Events.attachSchema(new SimpleSchema({
  user: {
    type: String
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
  hostName: {
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
