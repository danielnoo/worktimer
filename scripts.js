

const soundEffect = new Audio('sms-alert-1-daniel_simon.wav');

let timerRunning = false;

let startTimer;


function setTimer(startTimer){
  
  
  
  document.getElementById("clock").innerHTML = startTimer;
  const newTimer = setInterval(subtractMinute, 1000)
  
  function subtractMinute(){
    startTimer -= 1;
    if(startTimer === 0){
      document.getElementById("clock").innerHTML = "SNACK TIME";
      clearInterval(newTimer);
      soundEffect.play();
    } else {
      document.getElementById("clock").innerHTML = startTimer;
    };
  };
  
  
};






