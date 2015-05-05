Template._eventsEdit.events({
  'submit form': function(event) {
    stopEvent(event);

    // TODO: save event
  },

  'click #add-an-activity': Modal.openModal.bind(null, '#createActivity'),

  'click .close': function(event){
    stopEvent(event);

    ParamManager.setParam('edit-form', null);
  }
});

