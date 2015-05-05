Template._eventsEdit.onRendered(function(){
  if (Router.current().params.query['edit-form']) {
    $('#events-edit').show()
  }
});

Template._eventsEdit.events({
  'submit form': function(event) {
    stopEvent(event);

    // TODO: save event
  },

  'click #add-an-activity': Modal.openModal.bind(null, '#createActivity'),

  'click .close': function(event){
    stopEvent(event);

    transformClose({
      from: $('#events-edit'),
      to: $('#event-edit-btn')
    });
  }
});

