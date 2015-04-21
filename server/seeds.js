Meteor.startup(function(){
  var user1, user2, user3;

  if (!Users.find().count()) {
    user1 = Users.insert({
      fullName: faker.name.findName(),
      email: faker.internet.email(),
      secondaryEmail: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
    });

    user2 = Users.insert({
      fullName: faker.name.findName(),
      email: faker.internet.email(),
      secondaryEmail: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
    });

    user3 = Users.insert({
      fullName: faker.name.findName(),
      email: faker.internet.email(),
      secondaryEmail: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
    });
  }

  if (!Events.find().count()) {
    _(10).times(function(){
      Events.insert({
        user: user1,
        coverPhoto: faker.image.image(),
        title: faker.name.findName(),
        description: faker.lorem.sentences(),
        isPlusOne: true,

        hosts: [{
          name: faker.name.findName(),
          role: faker.hacker.adjective(),
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
        }, {
          name: faker.name.findName(),
          role: faker.hacker.adjective(),
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
        }],

        activities: [{
          title: faker.name.findName(),
          startTime: faker.date.past(),
          endTime: faker.date.future(),
          timeZone: 'central',

          address: {
            locationName: faker.company.companyName(),
            address1: faker.address.streetAddress(),
            address2: faker.address.secondaryAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
          },

          attire: faker.lorem.sentence(),
          transit: faker.lorem.sentence(),
          notes: faker.lorem.sentence(),
        }, {
          title: faker.name.findName(),
          startTime: faker.date.past(),
          endTime: faker.date.future(),
          timeZone: 'central',

          address: {
            locationName: faker.company.companyName(),
            address1: faker.address.streetAddress(),
            address2: faker.address.secondaryAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
          },

          attire: faker.lorem.sentence(),
          transit: faker.lorem.sentence(),
          notes: faker.lorem.sentence(),
        }, {
          title: faker.name.findName(),
          startTime: faker.date.past(),
          endTime: faker.date.future(),
          timeZone: 'central',

          address: {
            locationName: faker.company.companyName(),
            address1: faker.address.streetAddress(),
            address2: faker.address.secondaryAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
          },

          attire: faker.lorem.sentence(),
          transit: faker.lorem.sentence(),
          notes: faker.lorem.sentence(),
        }],

        comments: [{
          user: user1,
          body: faker.lorem.sentence(),
          imageUrl: faker.image.imageUrl(),
        }, {
          user: user2,
          body: faker.lorem.sentence(),
          imageUrl: faker.image.imageUrl(),
        }, {
          user: user1,
          body: faker.lorem.sentence(),
          imageUrl: faker.image.imageUrl(),
        }, {
          user: user3,
          body: faker.lorem.sentence(),
          imageUrl: faker.image.imageUrl(),
        }],
      });
    });
  }
});
