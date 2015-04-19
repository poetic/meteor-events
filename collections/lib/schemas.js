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
    type: String
  },
  body: {
    type: String
  },
  imageUrl: {
    type: String
  }
});
