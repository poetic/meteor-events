Router.route('/', {
  name: 'index'
});

Router.route('/users/:_id/events', {
  name: 'events.index'
});

Router.route('/users/:_id/events/:event_id/planning', {
  name: 'events.show.planning'
});

Router.route('/users/:_id/events/:event_id/attending', {
  name: 'events.show.attending'
});
