Meteor.startup(function(){
  if (!Events.find().count()) {
    _(10).times(function(){
      Events.insert({
        coverPhoto: faker.image.imageUrl(),
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
          endTime: new Date(),
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
          endTime: new Date(),
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
          endTime: new Date(),
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
          body: faker.lorem.sentence(),
          imageUrl: faker.image.imageUrl(),
        }, {
          body: faker.lorem.sentence(),
          imageUrl: faker.image.imageUrl(),
        }, {
          body: faker.lorem.sentence(),
          imageUrl: faker.image.imageUrl(),
        }, {
          body: faker.lorem.sentence(),
          imageUrl: faker.image.imageUrl(),
        }],
      });
    });
  }
});
