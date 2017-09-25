var restPlus = document.getElementById("restPlus");
var restTimer = document.getElementById("restTimer");
var restMinus = document.getElementById("restMinus");
var workPlus = document.getElementById("workPlus");
var workTimer = document.getElementById("workTimer");
var workMinus = document.getElementById("workMinus");
var time = document.getElementById("time");
var startStop = document.getElementById("start");
var reset = document.getElementById("reset");

restTimer.innerHTML = 5;
workTimer.innerHTML = 25;
var counting = false;
var m = 25;
var s = 0;
var minBreak = 5;
var secBreak = 0;
var timeIt;
var timeItBreak;
var mWork;
mWork = m;
var mBreak;
mBreak = minBreak;

reset.addEventListener("click", function(){
  time.innerHTML = "";
  m = 25;
  s = 0;
  mWork = 25;
  time.innerHTML = m + ":0" + s;
});

//set rest time and work time increments
restPlus.addEventListener("click", function(){
  restTimer.innerHTML++;
  minBreak++;
  mBreak = minBreak;
});
restMinus.addEventListener("click", function(){
  if(restTimer.innerHTML > 1) {
    restTimer.innerHTML--;
    minBreak++;
    mBreak = minBreak;
  }
});
workPlus.addEventListener("click", function(){
  workTimer.innerHTML++;
  m++;
  time.innerHTML = m + ":0" + s;
  mWork = m;
});
workMinus.addEventListener("click", function(){
  if(workTimer.innerHTML > 1) {
    workTimer.innerHTML--;
    m--;
    time.innerHTML = m + ":0" + s;
    mWork = m;
  }
});

//set countdown
time.innerHTML = mWork + ":0" + s;
startStop.addEventListener("click", function(){
  counting = !counting;
  var isItBreak = false;
  //work timer
  if(counting) {
    timeIt = setInterval(function(){
        time.innerHTML =  mWork + ":0" + s;
        if(mWork === -1 && isItBreak === false) {
          mWork = mBreak - 1;
          isItBreak = true;
        }
        if(isItBreak === true && mWork === -1) {
          mWork = m - 1;
          isItBreak = false;
        }
        if(s === 0) {                            
          s = 60;
        }
        if(s === 60) {
          mWork--;
        }
        s--;
        if(s < 10) {
          time.innerHTML = mWork + ":0" + s;
        } else if(mWork < 10) {
          time.innerHTML = "0" + mWork + ":" + s;
        } else {
          time.innerHTML = mWork + ":" + s;
        }
        if(mWork < 10 && s < 10) {
          time.innerHTML = "0" + mWork + ":0" + s;
        }
     }, 1000);
    } else {
      clearInterval(timeIt);
    }
});