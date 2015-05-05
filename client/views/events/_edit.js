Template._eventsEdit.onRendered(function(){
  if(Router.current().params['create-event']) {
    $(this.firstNode).css('display', 'block').css('top', 0);
  }
  // TODO: use js to set the height of the inputs
});

Template._eventsEdit.events({
  'submit form': function(event) {
    stopEvent(event);

    // TODO: save event

    return false;
  },

  'click #add-an-activity': Modal.openModal.bind(null, '#createActivity'),

  'click .close': function(event){
    stopEvent(event);

    transformClose({
      from: $('#create-event'),
      to: $('#add-event-btn')
    });
  }
});

