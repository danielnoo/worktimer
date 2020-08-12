

const soundEffect = new Audio('sms-alert-1-daniel_simon.wav');
const completeEffect = new Audio('finishtone.mp3')

const fiveMinBreak = 300000;
const fifteenMinBreak = 900000;
const shortWorkTimer = 1500000;
const longWorkTimer = 2700000;



const timer = document.querySelector("#clock");
const fiveMinBreakButton = document.querySelector('#shortBreak');
const fifteenMinBreakButton = document.querySelector('#longBreak');
const shortWorkTimerButton = document.querySelector('#shortWorkTimer');
const longWorkTimerButton = document.querySelector('#longWorkTimer');
const pauseButton = document.querySelector('#pauseButton');
const resetButton = document.querySelector('#resetButton');

let timerRunning = false;
let clockTimer;

// start the timer for 25 minute work period

shortWorkTimerButton.addEventListener('click', () => {
  clearInterval(clockTimer);
  let workDuration = 5;
  timer.innerHTML = workDuration;
  timerRunning = true;
  
  clockTimer = setInterval(() => {
    workDuration--;
    timer.innerHTML = workDuration;

    if(workDuration === 0) {
      clearInterval(clockTimer);
      timer.innerHTML = "SNACK TIME";
      completeEffect.play();
      pauseButton.innerHTML = "Pause";
    }
  }, 1000)
});


// start the timer for 45 minute work period

longWorkTimerButton.addEventListener('click', () => {
  clearInterval(clockTimer);
  let workDuration = 45;
  timer.innerHTML = workDuration;
  timerRunning = true;
  
  clockTimer = setInterval(() => {
    workDuration--;
    timer.innerHTML = workDuration;

    if(workDuration === 0) {
      clearInterval(clockTimer);
      timer.innerHTML = "SNACK TIME";
      completeEffect.play();
      pauseButton.innerHTML = "Pause";
    }
  }, 1000)
});

// short break button

fiveMinBreakButton.addEventListener('click', () => {
  clearInterval(clockTimer);
  let workDuration = 5;
  timer.innerHTML = workDuration;
  timerRunning = true;
  
  clockTimer = setInterval(() => {
    workDuration--;
    timer.innerHTML = workDuration;

    if(workDuration === 0) {
      clearInterval(clockTimer);
      timer.innerHTML = "SNACK TIME";
      soundEffect.play();
      pauseButton.innerHTML = "Pause";
    }
  }, 1000)
});


// long break button

fifteenMinBreakButton.addEventListener('click', () => {
  clearInterval(clockTimer);
  let workDuration = 15;
  timer.innerHTML = workDuration;
  timerRunning = true;
  
  clockTimer = setInterval(() => {
    workDuration--;
    timer.innerHTML = workDuration;

    if(workDuration === 0) {
      clearInterval(clockTimer);
      timer.innerHTML = "SNACK TIME";
      soundEffect.play();
      pauseButton.innerHTML = "Pause";
    }
  }, 1000)
});

// pause and resume the clock with alarm intact

pauseButton.addEventListener('click', () => {
// resume  
  if(timerRunning === false) {
    if(timer.innerHTML === "SNACK TIME") {
      return;
    }
    let workDuration = parseInt(timer.innerHTML);
    timerRunning = true;
    clockTimer = setInterval(() => {
      workDuration--;
      timer.innerHTML = workDuration;
      if(workDuration === 0) {
        clearInterval(clockTimer);
        timer.innerHTML = "SNACK TIME";
        soundEffect.play();
        pauseButton.innerHTML = "Pause";
        timerRunning = false
      }
    }, 1000)
// pause
  } else {
    if(timer.innerHTML === "SNACK TIME") {
      return;
    }
    clearInterval(clockTimer);
    pauseButton.innerHTML = "Resume";
    timerRunning = false;
  }
});

// reset the clock

resetButton.addEventListener('click', () => {
  clearInterval(clockTimer);
  timer.innerHTML = "";
});














