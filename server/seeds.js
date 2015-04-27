Meteor.startup(function(){
  //Users.remove({})
  //Events.remove({})
  var user1, user2, user3, user4, user5, user6;
  var events = [];

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

    user4 = Users.insert({
      fullName: faker.name.findName(),
      email: faker.internet.email(),
      secondaryEmail: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
    });

    user5 = Users.insert({
      fullName: faker.name.findName(),
      email: faker.internet.email(),
      secondaryEmail: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
    });

    user6 = Users.insert({
      fullName: faker.name.findName(),
      email: faker.internet.email(),
      secondaryEmail: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
    });
  }

  if (!Events.find().count()) {
    for (var i = 0; i < 10; i++) {
      events[i] = Events.insert({
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
          created: new Date(),
        }, {
          user: user2,
          body: faker.lorem.sentence(),
          imageUrl: faker.image.imageUrl(),
          created: new Date(),
        }, {
          user: user1,
          body: faker.lorem.sentence(),
          imageUrl: faker.image.imageUrl(),
          created: new Date(),
        }, {
          user: user3,
          body: faker.lorem.sentence(),
          imageUrl: faker.image.imageUrl(),
          created: new Date(),
        }],
      });
    };
  }
  var auser2 = Users.findOne({ _id: user2 })
  var auser3 = Users.findOne({ _id: user3 })
  var auser4 = Users.findOne({ _id: user4 })
  var auser5 = Users.findOne({ _id: user5 })
  var auser6 = Users.findOne({ _id: user6 })

  //Events.update({_id: events[0]}, {$push: {guests: {$each: [{
    //name: auser2.fullName,
    //email: auser2.email,
    //phone: auser2.phone,
    //invited: true,
    //attending: true,
    //plusOne: true,
    //replied: true,
    //mailStatus: 'opened',
    //guest: user2,
  //}, {
    //name: auser3.fullName,
    //email: auser3.email,
    //phone: auser3.phone,
    //invited: false,
    //attending: false,
    //plusOne: false,
    //replied: false,
    //mailStatus: 'bounced',
    //guest: user3,
  //}, {
    //name: auser5.fullName,
    //email: auser5.email,
    //phone: auser5.phone,
    //invited: true,
    //attending: true,
    //plusOne: true,
    //replied: true,
    //mailStatus: 'opened',
    //guest: user5,
  //}, {
    //name: auser4.fullName,
    //email: auser4.email,
    //phone: auser4.phone,
    //invited: false,
    //attending: false,
    //plusOne: false,
    //replied: false,
    //mailStatus: 'bounced',
    //guest: user4,
  //}]}}});

  //Events.update({_id: events[1]}, {$push: {guests: {$each: [{
    //name: auser4.fullName,
    //email: auser4.email,
    //phone: auser4.phone,
    //invited: false,
    //attending: false,
    //plusOne: false,
    //replied: false,
    //mailStatus: 'bounced',
    //guest: user4,
  //}, {
    //name: auser5.fullName,
    //email: auser5.email,
    //phone: auser5.phone,
    //invited: true,
    //attending: true,
    //plusOne: true,
    //replied: true,
    //mailStatus: 'opened',
    //guest: user5,
  //}]}}})

  //Users.update({ _id: user2 }, { $push: { events: { $each: [events[0]] } } })
  //Users.update({ _id: user3 }, { $push: { events: { $each: [events[0]] } } })
  //Users.update({ _id: user4 }, { $push: { events: { $each: [events[0], events[1]] } } })
  //Users.update({ _id: user5 }, { $push: { events: { $each: [events[0], events[1]] } } })
});
