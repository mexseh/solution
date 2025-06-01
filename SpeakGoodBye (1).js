// STEP 6: Wrap in an IIFE to avoid polluting global scope
(function(window) {
  // STEP 7: Create byeSpeaker object
  var byeSpeaker = {};

  // Do NOT attach speakWord to byeSpeaker object
  var speakWord = "Good Bye";

  // STEP 8: Attach speak method to byeSpeaker object
  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  // STEP 9: Expose byeSpeaker to the global scope (window)
  window.byeSpeaker = byeSpeaker;

})(window);
