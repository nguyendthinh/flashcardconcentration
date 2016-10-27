$(document).ready(function(){



  // I might rename this to simonButtons
  var posSequence = [$("#red"), $("#blue"), $("#green"), $("#yellow")];
  // might rename this to randomButton. I'm nitpicky with variable names, but this is personal preference so I dont confuse myself
  var randomSequence;
  var roundNumber = 0;

  var playerClicks = [];
  var storedSequences = [];

  var counter;
  var count = 0;

  // On Click functions
  // super clean code
  $("#start").on("click", begin);
  $(".simon").on("click", divClick);

  //// New Game Button

  // Your code is well organized and very readable recommendation is write a
  // constructor for the Game, though it might seem somewhat daunting at
  // first. It would encapsulate the DOM elements, the variables for the game, timers, and the functions that handle its operation. It would simplify some things potentially, like resetting the game: clicking start would just instantiate a new Simon object (under one namespace, so it would just reassign the value of that variable rather than creating multiple Simon instances which sounds chaotic). 



  function begin(){
    event.preventDefault();
    count = 0;
    playerClicks = [];
    storedSequences = [];
    roundNumber = 0;
    roundNumber++;
    clearInterval(counter);
    counter = setInterval(startTimer, 1000);
    $("body").css("background-image", "url('IMAGES/harddrive.jpg')");
    $("#container").css("background-image", "url('IMAGES/techbackground.jpg')");
    $(".box").css({"color" : "#b0f8f7", "border" : "5px solid #b0f8f7"});
    lightSequence();
    $("#clicks").text((storedSequences.length - playerClicks.length) + " Clicks Left");
  }

  /// Lighting up the tile sequences

  function lightSequence(){
    randomSequence = posSequence[Math.floor(Math.random() * posSequence.length)];
    storedSequences.push(randomSequence.attr("id"));
    setTimeout(function() { showColors(0);}, 700);
    $("#round").text("You are on LEVEL " + roundNumber);
    $("#clicks").text((storedSequences.length - playerClicks.length) + " Clicks Left");
  }

function showColors(index){
  if (index < storedSequences.length) {
    // Not sure if the first fadeIn is doing anything here
    $('#' + storedSequences[index]).fadeIn(300).fadeOut(300).fadeIn(300);
    setTimeout(function() { showColors(index + 1);}, 700);
  }
}

  // User click input

  function divClick(){
    $(this).fadeIn(300).fadeOut(300).fadeIn(300);
    playerClicks.push($(this).attr("id"));
    $("#clicks").text((storedSequences.length - playerClicks.length) + " Clicks Left");

    if (playerClicks.length === storedSequences.length) {
      storedSequences.every(function(element, index){
        return element === playerClicks[index]
      }) ? nextRound() : startAgain();
    }
  }

    function nextRound() {
      playerClicks = [];
      roundNumber++;
      // setTimeout(function() {lightSequence();}, 500);
      // this is preferable I think
      setTimeout(lightSequence, 500);
    }

    function startAgain() {
      stopTimer();
      playerClicks = [];
      storedSequences = [];
      roundNumber = 0;
      count = 0;
      event.preventDefault();
      $("body").css("background-image", "url('IMAGES/futuristictexture2.jpg')");
      $("#container").css("background-image", "url('IMAGES/techbackground2.jpg')");
      $(".box").css({"color" : "#ea9696", "border" : "5px solid #ea9696"});
      $("#round").text("ERROR")
      $("#clicks").text("0 Clicks Left");
    }

// timer function

    function startTimer() {
      count++;
      $("#timer").text(count + " seconds");
    }

    function stopTimer() {
        clearInterval(counter);
        $("#timer").text((playerClicks.length * 10) + (parseInt((count/playerClicks.length) * 10)) + " Points");
    }

});
