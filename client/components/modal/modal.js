Modal = {
  // TODO: add an option for animation
  openModal: function(selector) {
    $(selector).css('display', 'block');
    $(selector).velocity({top: 0}, "swing");
    return false;
  },
  closeModal: function(event, template) {
    var modal = $(template.firstNode);
    modal.velocity({top: '100%'}, "swing", function() {
      modal.css('display', 'none');
    });
  }
};
