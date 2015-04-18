Events = new Mongo.Collection('events');

Events.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Title',
  },
  date: {
    type: Date,
    label: 'Date',
  },
  image: {
    type: String,
    label: 'Image'
  },
}));
