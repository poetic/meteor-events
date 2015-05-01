Template.CreateEvent.onRendered(function(){
  if(Router.current().params['create-event']) {
    $(this.firstNode).css('display', 'block').css('top', 0);
  }
});

Template.CreateEvent.events({
  'submit form': function(event) {
    event.preventDefault();

    // TODO: implement

    return false;
  },
  'click .close': Modal.closeModal,
});

