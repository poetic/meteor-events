Template.CreateEvent.onRendered(function(){
  if(Router.current().params['create-event']) {
    $(this.firstNode).css('display', 'block').css('top', 0);
  }
  // TODO: use js to set the height of the inputs
});

Template.CreateEvent.helpers({
});

Template.CreateEvent.events({
  'submit form': function(event) {
    event.preventDefault();

    // TODO: save event

    return false;
  },
  'click #add-an-activity': Modal.openModal.bind(null, '#createActivity'),
  'click .close': Modal.closeModal,
});

