(function( $, window, undefined ){
  var ThenBe = {
    elements: {},

    _bindEvents: function() {
      var self = this;

      this.elements.panelChangeLink.on('click', function(e) {
        e.preventDefault();
        var target = $(this).data('target');
        self.elements.body.data('state', target).attr('data-state', target);
      });
    },

    _getElements: function() {
      this.elements.window = $(window);
      this.elements.body = $('body');

      this.elements.panelChangeLink = $('a.panel-change');
    },

    initialize: function() {
      this._getElements();
      this._bindEvents();
    }
  };

  // Send to global namespace
  window.ThenBe = ThenBe;

  // Blastoff
  $(function(){
    ThenBe.initialize();
  });

})( jQuery, window, null );
