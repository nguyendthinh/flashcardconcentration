$(document).ready(function(){

  var posSequence = [$("#red"), $("#blue"), $("#green"), $("#yellow")];
  var roundNumber = 0;
  var randomSequence;
  var sequenceColors;
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
    // console.log(storedSequences + "%");
    storedSequences.push(randomSequence.attr("id"));
    // $(randomSequence).fadeIn(400).fadeOut(400).fadeIn(400);
    // console.log(sequenceColors);
    // console.log(storedSequences + "!");
    console.log(storedSequences + "$");
    setTimeout(function() { showColors(0);}, 500);
  }

function showColors(index){
  if (index < storedSequences.length) {
    $('#' + storedSequences[index]).fadeIn(400).fadeOut(400).fadeIn(400);
    setTimeout(function() { showColors(index + 1);}, 700);
    console.log(storedSequences[index]);
  }
}

  //

  function divClick(){
    $(this).fadeIn(400).fadeOut(400).fadeIn(400);
    playerClicks.push($(this).attr("id"));

    for (var i=0; i < storedSequences.length; i++) {
      if (playerClicks.length === storedSequences.length) {
        if (playerClicks[i] === storedSequences[i]) {
        playerClicks = [];
        console.log(storedSequences +"?");
        // alert("Move on to the next round");
        return;
      } else {
        // alert("You don't got it");
        playerClicks = [];
        storedSequences = [];
        return;
      }
    }
  }
  }

});
