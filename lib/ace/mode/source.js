define('ace/mode/source', function(require, exports, module) {

  var oop = require("ace/lib/oop");
  var JavaScriptMode = require("ace/mode/javascript").Mode;
  var SourceHighlightRules = require("ace/mode/source_highlight_rules").SourceHighlightRules;
  
  var Mode = function() {
      this.HighlightRules = SourceHighlightRules;
  };
  oop.inherits(Mode, JavaScriptMode);
  
  (function() {
      // Extra logic goes here. (see below)
  }).call(Mode.prototype);
  
  exports.Mode = Mode;
});