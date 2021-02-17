var counter = 0;
var timeLeft = 20;
var SpacePressed = 0;
var ResetButton = document.getElementById("yes")
var Counter = document.getElementById("counter")

ResetButton.onclick = function() {
 
  alert("Your Score Is: " + SpacePressed);
  
  timeLeft = 21;
  counter = 0;
  SpacePressed = 0;
}

  var TimerFind =  document.getElementById("timer");
  
 function timeIt() {
   counter++;
   TimerFind.innerHTML = timeLeft - counter;
     console.log("countdown minus 1");
 }
  
setInterval(timeIt, 1000);

// -----------------------------------------------

  if (timeLeft == 0) {
    alert("Your score is : " + SpacePressed);
  }

window.onload = function(){ 
    var space_bar = 32; 
    var right_arrow = 39; 
  
    window.onkeydown= function(gfg){ 
        if(gfg.keyCode === space_bar){ 
          SpacePressed++;
          Counter.innerHTML = "Counter: " + SpacePressed;
          
        }; 
        if(gfg.keyCode === right_arrow)
       { 
           alert("Made By LOG1CEXE#6666"); 
       }; 
    }; 
};     
