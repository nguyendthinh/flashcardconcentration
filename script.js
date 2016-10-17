$(document).ready(function(){

  var posSequence = [$("#red"), $("#blue"), $("#green"), $("#yellow")];
  var randomSequence;
  var roundNumber = 0;
  var playerClicks = [];
  var storedSequences = [];

  var counter;
  var count = 0;

  //

  $("#start").on("click", begin);

  $(".simon").on("click", divClick);

  ////

  function begin(){
    event.preventDefault();
    count = 0;
    counter = setInterval(startTimer, 1000);
    $("body").css("background-image", "url('IMAGES/harddrive.jpg')");
    $("#container").css("background-image", "url('IMAGES/techbackground.jpg')");
    $(".box").css({"color" : "#b0f8f7", "border" : "5px solid #b0f8f7"});
    playerClicks = [];
    storedSequences = [];
    roundNumber = 0;
    roundNumber++;
    lightSequence();
    $("#clicks").text((storedSequences.length - playerClicks.length) + " Clicks Left");
  }

  ///

  function lightSequence(){
    randomSequence = posSequence[Math.floor(Math.random() * posSequence.length)];
    storedSequences.push(randomSequence.attr("id"));
    setTimeout(function() { showColors(0);}, 700);
    $("#round").text("You are on LEVEL " + roundNumber);
    $("#clicks").text((storedSequences.length - playerClicks.length) + " Clicks Left");
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
      setTimeout(function() {lightSequence();}, 500);
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

//

    function startTimer() {
      count++;
      $("#timer").text(count + " seconds");
      console.log(count);
    }

    function stopTimer() {
        clearInterval(counter);
        $("#timer").text((playerClicks.length * 10) + (parseInt((playerClicks.length/count) * 10)) + " Points");
    }

});
