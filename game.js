var buttonColors= ["red", "green", "blue", "yellow"];
var gamePattern =[];
var randomChosenColors;
var userClickedPattern = [];
var level=0;
var gameStart= false;


$(document).keypress(function(){
  if (!gameStart){
    $("#level-title").text("Level " + level);
    nextSequence();
    gameStart = true;
  }
});

$(".btn").click(function(){
  
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  
  playSound(userChosenColor);
 
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length-1); //


});

function checkAnswer(currentLevel){  
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    console.log("true");
    if(userClickedPattern.length===gamePattern.length){
      setTimeout(function()
      {
        nextSequence();
      },1000);
  }
  }
  else
  {
    console.log("false");
    playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function()
  {$("body").removeClass("game-over");},200);
  startOver();
  $("#level-title").text("Game Over, Press Any Key to Restart🎮");

  startOver();
  
   }
}

function nextSequence() {
  userClickedPattern=[];
  level++;
  $("#level-title").text("Level " + level);
    
  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenColors = buttonColors[randomNumber];
      gamePattern.push(randomChosenColors);       

    $("#" + randomChosenColors).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColors);
}


   function playSound(name){
    var audio =new Audio("sounds/" + name + ".mp3");
    audio.play();
   } 

   function animatePress(currentColor){
    $("#"+ currentColor).addClass("pressed"); 

    setTimeout(function(){
  $("#"+ currentColor).removeClass("pressed");
    },100);

  }


  function startOver() {
    level=0;
    gamePattern=[];
    gameStart=false;
  }
  













   