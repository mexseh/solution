// STEP 2: Wrap everything in an IIFE to avoid polluting the global scope
(function(window) {
  // STEP 3: Create helloSpeaker object
  var helloSpeaker = {};

  // Do NOT attach speakWord to helloSpeaker object
  var speakWord = "Hello";

  // STEP 4: Attach speak method to helloSpeaker object
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose helloSpeaker to the global scope (window)
  window.helloSpeaker = helloSpeaker;

})(window);
