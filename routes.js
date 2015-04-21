Router.route('/', {
  name: 'index'
});

Router.route('/users/:user_id/events', {
  name: 'events.index'
});

Router.route('/users/:user_id/events/:event_id', {
  name: 'events.show'
});
