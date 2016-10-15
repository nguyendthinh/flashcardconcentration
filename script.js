$(document).ready(function(){

  var posSequence = [$("#red"), $("#blue"), $("#green"), $("#yellow")];
  var roundNumber = 0;
  var randomSequence;
  var playerClicks = [];
  var storedSequences = [];

  //

  $("#start").on("click", begin);

  $("#next").on("click", round);

  $(".simon").on("click", divClick);

  ////

  function begin(){
    playerClicks = [];
    storedSequences = [];
    roundNumber = 0;
    lightSequence();
    roundNumber++;
  }

  function round(){
      lightSequence();
    roundNumber++;
  }

  ///

  function lightSequence(){
    randomSequence = posSequence[Math.floor(Math.random() * posSequence.length)];
    storedSequences.push(randomSequence.attr("id"));
    setTimeout(function() { showColors(0);}, 500);
  }

function showColors(index){
  if (index < storedSequences.length) {
    $('#' + storedSequences[index]).fadeIn(400).fadeOut(400).fadeIn(400);
    setTimeout(function() { showColors(index + 1);}, 700);
  }
}

  //

  function divClick(){
    $(this).fadeIn(400).fadeOut(400).fadeIn(400);
    playerClicks.push($(this).attr("id"));

    if (playerClicks.length === storedSequences.length) {
      storedSequences.every(function(element, index){
        return element === playerClicks[index]
      }) ? nextRound() : startAgain();
    }

    function nextRound() {
      playerClicks = [];
      alert("you got it");
    }

    function startAgain() {
      playerClicks = [];
      storedSequences = [];
      alert("try again");
    }
  }

  //  for (var i=0; i < storedSequences.length; i++) {
  //     if (playerClicks.length === storedSequences.length) {
  //       if (playerClicks === storedSequences) {
  //       console.log(playerClicks);
  //       console.log(storedSequences);
  //       playerClicks = [];
  //       alert("you got it");
  //     } else {
  //       console.log(playerClicks);
  //       console.log(storedSequences);
  //       alert("try again");
  //       playerClicks = [];
  //       storedSequences = [];
  //     }
  //   }
  // }
});
