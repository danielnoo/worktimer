

const soundEffect = new Audio('sms-alert-1-daniel_simon.wav');


function setTimer(minutes){
  let timer = minutes;
  document.getElementById("clock").innerHTML = minutes;
  const newTimer = setInterval(subtractMinute, 3000)
  
  function subtractMinute(){
    timer -= 1;
    if(timer === 0){
      document.getElementById("clock").innerHTML = "SNACK TIME";
      clearInterval(newTimer);
      soundEffect.play();
    } else {
      document.getElementById("clock").innerHTML = timer;
    };
  };
  
  
};




