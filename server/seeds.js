Meteor.startup(function(){
  if (!Events.find().count()) {
    _(5).times(function(){
      Events.insert({
        title: faker.name.findName(),
        date: faker.date.future(),
        image: faker.image.imageUrl(),
      });
    });

    _(5).times(function(){
      Events.insert({
        title: faker.name.findName(),
        date: faker.date.past(),
        image: faker.image.imageUrl(),
      });
    });
  }

  if (!Users.find().count()) {
    _(5).times(function(){
      Users.insert({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
      });
    });
  }
});
