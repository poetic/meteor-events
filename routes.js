Router.route('/', {
  name: 'index'
});

Router.route('/users/:_id/events', {
  name: 'events.index'
});

Router.route('/users/:_id/events/:event_id', {
  name: 'events.show'
});
