(function( $, window, undefined ){
  var ThenBe = {
    elements: {},

    _bindEvents: function() {
      var self = this;
    },

    _getElements: function() {
      this.elements.window = $(window);
    },

    initialize: function() {
      this._getElements();
      this._bindEvents();
      console.log('foo');
    }
  };

  // Send to global namespace
  window.ThenBe = ThenBe;

  // Blastoff
  $(function(){
    ThenBe.initialize();
  });

})( jQuery, window, null );
