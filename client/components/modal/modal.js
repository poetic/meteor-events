Modal = {
  closeModal: function closeModal(event, template) {
    var modal = $(template.firstNode);
    modal.velocity({top: '100%'}, "swing", function() {
      modal.css('display', 'none');
    });
  }
};
