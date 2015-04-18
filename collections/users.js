Users = new Mongo.Collection('users');

Users.attachSchema(new SimpleSchema({
  firstName: {
    type: String,
    label: 'First Name',
  },
  lastName: {
    type: String,
    label: 'Last Name',
  },
  email: {
    type: String,
    label: 'Email',
  }
}));
