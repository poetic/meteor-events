Schemas = {};

HostSchema = new SimpleSchema({
  name: {
    type: String
  },
  role: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  }
});

AddressSchema = new SimpleSchema({
  locationName: {
    type: String
  },
  address1: {
    type: String
  },
  address2: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zipCode: {
    type: String
  }
});

ActivitySchema = new SimpleSchema({
  title: {
    type: String
  },
  startTime: {
    type: Date
  },
  endTime: {
    type: Date
  },
  timeZone: {
    type: String
  },
  address: {
    type: AddressSchema
  },
  attire: {
    type: String
  },
  transit: {
    type: String
  },
  notes: {
    type: String
  },
  //media: {
    //??
  //}
});

CommentSchema = new SimpleSchema({
  user: {
    type: String,
    optional: true,
  },
  body: {
    type: String
  },
  created: {
    type: Date
  },
  imageUrl: {
    type: String,
    optional: true
  },
});

GuestSchema = new SimpleSchema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  invited: {
    type: Boolean
  },
  attending: {
    type: Boolean
  },
  plusOne: {
    type: Boolean
  },
  replied: {
    type: Boolean
  },
  mailStatus: {
    type: String
  },
    // initially a guest may not have a user account because all we may have
    // is a name and phone number. when the guest becomes a user this field will
    // be populated and the event will be added to the user's events array.
  guest: {
    type: String
  },
});
