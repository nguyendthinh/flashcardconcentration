$(document).ready(function(){

// var playedSteps = [];
var posSequence = [$("#red"), $("#blue"), $("#green"), $("#yellow")];
// var round = 0;
// var playNumber = 0;
// var clicked = 0;

//To begin the game

var randomSequence;
var sequenceColors;
var storedSequences;
var playerClicks;
var blinkTimes = 2;

$("#start").on("click", function() {

// for (var i=0; i < 11; i++) {

function lightSequence() {
  randomSequence = posSequence[Math.floor(Math.random() * posSequence.length)];
  sequenceColors = randomSequence.fadeIn(200).fadeOut(200).fadeIn(200);
  storedSequences = sequenceColors.attr("id");
}

lightSequence();

  $(".simon").on("click", function() {
    playerClicks = $(this).attr("id");

    if (playerClicks === storedSequences) {
      for (var i=0; i < blinkTimes; i++) {
        lightSequence();
      }
      blinkTimes += 1;
    } else {
      // alert("You don't got it");
      return;
    }
  })

// }

});

});
