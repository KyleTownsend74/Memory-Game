// global constants
const initialClueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [1, 2, 4, 3, 2, 5, 2, 5];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 0; //how long to hold each clue's light/sound
var numMistakes = 0;
var repeat = false; //true if the current clue was already played (if the user made a mistake)
var initialTimerCount = 8;
var timerCount = 5;
var timer;
var lastInPattern = false;

function startGame(){
  //initialize game variables
  progress = 0;
  clueHoldTime = initialClueHoldTime;
  generatePattern();
  numMistakes = 0;
  repeat = false;
  timerCount = initialTimerCount;
  gamePlaying = true;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  resetTimer();
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 220,
  2: 277.18,
  3: 329.63,
  4: 415.30,
  5: 440
}
function playTone(btn,len){ 
  //o.frequency.value = freqMap[btn]
  //g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  document.getElementById("audio"+btn).play();
  tonePlaying = true
  setTimeout(function(){
    stopTone(btn)
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    //o.frequency.value = freqMap[btn]
    //g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    document.getElementById("audio"+btn).play();
    tonePlaying = true
  }
}
function stopTone(btn){
  //g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  document.getElementById("audio"+btn).pause();
  document.getElementById("audio"+btn).currentTime = 0;
  tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
  document.getElementById("img"+btn).classList.remove("hidden");
}
function clearButton(btn, last){
  document.getElementById("button"+btn).classList.remove("lit");
  document.getElementById("img"+btn).classList.add("hidden");
  if(last && gamePlaying){
    timer = setInterval(startTimer, 1000);
  }
}

function playSingleClue(btn, last){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn,last);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    if(i == progress){
      lastInPattern = true;
    }
    else{
      lastInPattern = false;
    }
    setTimeout(playSingleClue,delay,pattern[i],lastInPattern) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  if(!repeat){
    clueHoldTime -= 90;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Congratulations! You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
  if(btn == pattern[guessCounter]){
    repeat = false;
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }
      else{
        resetTimer();
        progress++;
        playClueSequence();
      }
    }
    else{
      guessCounter++;
    }
  }
  else{
    resetTimer();
    numMistakes++;
    if(numMistakes > 2){
      loseGame();
    }
    // If the user makes a mistake and still has less than 3 mistakes,
    // clue will be repeated back to them before progressing.
    else{
      repeat = true;
      playClueSequence();
    }
  }
}

function generatePattern(){
  for(let i = 0; i < pattern.length; i++){
    pattern[i] = (Math.floor(Math.random() * 5)) + 1;
  }
}

function startTimer(){
  console.log("Timer: " + timerCount);
  if(timerCount > 0){
    timerCount--;
    document.getElementById("timer").innerHTML = "Time Left to Guess: " + timerCount + "s";
  }
  else{
    loseGame();
  }
}

function resetTimer(){
  clearInterval(timer);
  timerCount = initialTimerCount;
  document.getElementById("timer").innerHTML = "Time Left to Guess: ";
}

function showImage(btn){
  document.getElementById("img"+btn).classList.remove("hidden");
}

function hideImage(btn){
  document.getElementById("img"+btn).classList.add("hidden");
}