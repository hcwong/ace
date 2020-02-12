define('ace/mode/source', function(require, exports, module) {

  var oop = require("ace/lib/oop");
  var JavaScriptMode = require("ace/mode/javascript").Mode;
  var SourceHighlightRules = require("ace/mode/source_highlight_rules").SourceHighlightRules;
  var MatchingBraceOutdent = require("./matching_brace_outdent").MatchingBraceOutdent;
  var CstyleBehaviour = require("./behaviour/cstyle").CstyleBehaviour;
  var CStyleFoldMode = require("./folding/cstyle").FoldMode;
  
  var Mode = function() {
      this.HighlightRules = SourceHighlightRules;
      this.$outdent = new MatchingBraceOutdent();
      this.$behaviour = new CstyleBehaviour();
      this.foldingRules = new CStyleFoldMode();
  };
  oop.inherits(Mode, JavaScriptMode);
  
  (function() {
      // Extra logic goes here. (see below)
  }).call(Mode.prototype);
  
  exports.Mode = Mode;
});