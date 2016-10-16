$(document).ready(function(){

  var posSequence = [$("#red"), $("#blue"), $("#green"), $("#yellow")];
  var randomSequence;
  var roundNumber = 0;
  var playerClicks = [];
  var storedSequences = [];

  //

  $("#start").on("click", begin);

  $(".simon").on("click", divClick);

  ////

  function begin(){
    event.preventDefault();
    $("body").css("background-image", "url('IMAGES/harddrive.jpg')");
    $("#container").css("background-image", "url('IMAGES/techbackground.jpg')");
    playerClicks = [];
    storedSequences = [];
    roundNumber = 0;
    roundNumber++;
    lightSequence();
  }

  ///

  function lightSequence(){
    $("#round").text('Round ' + roundNumber);
    randomSequence = posSequence[Math.floor(Math.random() * posSequence.length)];
    storedSequences.push(randomSequence.attr("id"));
    setTimeout(function() { showColors(0);}, 700);
  }

function showColors(index){
  if (index < storedSequences.length) {
    $('#' + storedSequences[index]).fadeIn(300).fadeOut(300).fadeIn(300);
    setTimeout(function() { showColors(index + 1);}, 700);
  }
}

  //

  function divClick(){
    $(this).fadeIn(300).fadeOut(300).fadeIn(300);
    playerClicks.push($(this).attr("id"));

    if (playerClicks.length === storedSequences.length) {
      storedSequences.every(function(element, index){
        return element === playerClicks[index]
      }) ? nextRound() : startAgain();
    }
  }

    function nextRound() {
      playerClicks = [];
      roundNumber++;
      setTimeout(function() {lightSequence();}, 500);
    }

    function startAgain() {
      playerClicks = [];
      storedSequences = [];
      roundNumber = 0;
      event.preventDefault();
      $("body").css("background-image", "url('IMAGES/futuristictexture2.jpg')");
      $("#container").css("background-image", "url('IMAGES/techbackground2.jpg')");
      $("#round").text("ERROR ERROR ERROR ERROR ERROR ERROR")
    }

});
