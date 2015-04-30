Meteor.startup(function(){
  //Meteor.users.remove({})
  //Events.remove({})
  //var user1, user2, user3, user4, user5, user6;
  //var events = [];

  //if (!Meteor.users.find().count()) {
    //user1 = Accounts.createUser({
      //email: faker.internet.email(),
      //password: faker.internet.password(),
      //profile: {
        //fullName: faker.name.findName(),
        //secondaryEmail: faker.internet.email(),
        //phone: faker.phone.phoneNumber(),
      //},
    //});

    //user2 = Accounts.createUser({
      //email: faker.internet.email(),
      //password: faker.internet.password(),
      //profile: {
        //fullName: faker.name.findName(),
        //secondaryEmail: faker.internet.email(),
        //phone: faker.phone.phoneNumber(),
      //},
    //});

    //user3 = Accounts.createUser({
      //email: faker.internet.email(),
      //password: faker.internet.password(),
      //profile: {
        //fullName: faker.name.findName(),
        //secondaryEmail: faker.internet.email(),
        //phone: faker.phone.phoneNumber(),
      //},
    //});

    //user4 = Accounts.createUser({
      //email: faker.internet.email(),
      //password: faker.internet.password(),
      //profile: {
        //fullName: faker.name.findName(),
        //secondaryEmail: faker.internet.email(),
        //phone: faker.phone.phoneNumber(),
      //},
    //});

    //user5 = Accounts.createUser({
      //email: faker.internet.email(),
      //password: faker.internet.password(),
      //profile: {
        //fullName: faker.name.findName(),
        //secondaryEmail: faker.internet.email(),
        //phone: faker.phone.phoneNumber(),
      //},
    //});

    //user6 = Accounts.createUser({
      //email: faker.internet.email(),
      //password: faker.internet.password(),
      //profile: {
        //fullName: faker.name.findName(),
        //secondaryEmail: faker.internet.email(),
        //phone: faker.phone.phoneNumber(),
      //},
    //});
  //}

  //if (!Events.find().count()) {
    //for (var i = 0; i < 10; i++) {
      //events[i] = Events.insert({
        //user: user1,
        //coverPhoto: faker.image.image(),
        //title: faker.name.findName(),
        //description: faker.lorem.sentences(),
        //isPlusOne: true,

        //hosts: [{
          //name: faker.name.findName(),
          //role: faker.hacker.adjective(),
          //email: faker.internet.email(),
          //phone: faker.phone.phoneNumber(),
        //}, {
          //name: faker.name.findName(),
          //role: faker.hacker.adjective(),
          //email: faker.internet.email(),
          //phone: faker.phone.phoneNumber(),
        //}],

        //activities: [{
          //title: faker.name.findName(),
          //startTime: faker.date.past(),
          //endTime: faker.date.future(),
          //timeZone: 'central',

          //address: {
            //locationName: faker.company.companyName(),
            //address1: faker.address.streetAddress(),
            //address2: faker.address.secondaryAddress(),
            //city: faker.address.city(),
            //state: faker.address.state(),
            //zipCode: faker.address.zipCode(),
          //},

          //attire: faker.lorem.sentence(),
          //transit: faker.lorem.sentence(),
          //notes: faker.lorem.sentence(),
        //}, {
          //title: faker.name.findName(),
          //startTime: faker.date.past(),
          //endTime: faker.date.future(),
          //timeZone: 'central',

          //address: {
            //locationName: faker.company.companyName(),
            //address1: faker.address.streetAddress(),
            //address2: faker.address.secondaryAddress(),
            //city: faker.address.city(),
            //state: faker.address.state(),
            //zipCode: faker.address.zipCode(),
          //},

          //attire: faker.lorem.sentence(),
          //transit: faker.lorem.sentence(),
          //notes: faker.lorem.sentence(),
        //}, {
          //title: faker.name.findName(),
          //startTime: faker.date.past(),
          //endTime: faker.date.future(),
          //timeZone: 'central',

          //address: {
            //locationName: faker.company.companyName(),
            //address1: faker.address.streetAddress(),
            //address2: faker.address.secondaryAddress(),
            //city: faker.address.city(),
            //state: faker.address.state(),
            //zipCode: faker.address.zipCode(),
          //},

          //attire: faker.lorem.sentence(),
          //transit: faker.lorem.sentence(),
          //notes: faker.lorem.sentence(),
        //}],

        //comments: [{
          //user: user1,
          //body: faker.lorem.sentence(),
          //imageUrl: faker.image.imageUrl(),
          //created: new Date(),
        //}, {
          //user: user2,
          //body: faker.lorem.sentence(),
          //imageUrl: faker.image.imageUrl(),
          //created: new Date(),
        //}, {
          //user: user1,
          //body: faker.lorem.sentence(),
          //imageUrl: faker.image.imageUrl(),
          //created: new Date(),
        //}, {
          //user: user3,
          //body: faker.lorem.sentence(),
          //imageUrl: faker.image.imageUrl(),
          //created: new Date(),
        //}],
      //});
    //};
  //}

  //var auser2 = Meteor.users.findOne({ _id: user2 })
  //var auser3 = Meteor.users.findOne({ _id: user3 })
  //var auser4 = Meteor.users.findOne({ _id: user4 })
  //var auser5 = Meteor.users.findOne({ _id: user5 })
  //var auser6 = Meteor.users.findOne({ _id: user6 })

  //console.log(auser2)
  //Events.update({_id: events[0]}, {$push: {guests: {$each: [{
    //name: auser2.profile.fullName,
    //email: auser2.emails[0].address,
    //phone: auser2.profile.phone,
    //invited: true,
    //attending: true,
    //plusOne: true,
    //replied: true,
    //mailStatus: 'opened',
    //guest: user2,
  //}, {
    //name: auser3.profile.fullName,
    //email: auser3.emails[0].address,
    //phone: auser3.profile.phone,
    //invited: false,
    //attending: false,
    //plusOne: false,
    //replied: false,
    //mailStatus: 'bounced',
    //guest: user3,
  //}, {
    //name: auser5.profile.fullName,
    //email: auser5.emails[0].address,
    //phone: auser5.profile.phone,
    //invited: true,
    //attending: true,
    //plusOne: true,
    //replied: true,
    //mailStatus: 'opened',
    //guest: user5,
  //}, {
    //name: auser4.profile.fullName,
    //email: auser4.emails[0].address,
    //phone: auser4.profile.phone,
    //invited: false,
    //attending: false,
    //plusOne: false,
    //replied: false,
    //mailStatus: 'bounced',
    //guest: user4,
  //}]}}});

  //Events.update({_id: events[1]}, {$push: {guests: {$each: [{
    //name: auser4.profile.fullName,
    //email: auser4.emails[0].address,
    //phone: auser4.profile.phone,
    //invited: false,
    //attending: false,
    //plusOne: false,
    //replied: false,
    //mailStatus: 'bounced',
    //guest: user4,
  //}, {
    //name: auser5.profile.fullName,
    //email: auser5.emails[0].address,
    //phone: auser5.profile.phone,
    //invited: true,
    //attending: true,
    //plusOne: true,
    //replied: true,
    //mailStatus: 'opened',
    //guest: user5,
  //}]}}})

  //Meteor.users.update({ _id: user2 }, { $push: { events: { $each: [events[0]] } } })
  //Meteor.users.update({ _id: user3 }, { $push: { events: { $each: [events[0]] } } })
  //Meteor.users.update({ _id: user4 }, { $push: { events: { $each: [events[0], events[1]] } } })
  //Meteor.users.update({ _id: user5 }, { $push: { events: { $each: [events[0], events[1]] } } })
});
