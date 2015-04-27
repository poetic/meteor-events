Users = new Mongo.Collection('users');

Users.attachSchema(new SimpleSchema({
  fullName: {
    type: String
  },
  email: {
    type: String
  },
  secondaryEmail: {
    type: String
  },
  phone: {
    type: String
  },
  events: {
    type: [String],
    defaultValue: [],
  },
}));
