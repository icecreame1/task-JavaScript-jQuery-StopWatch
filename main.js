let timer = document.getElementById("timer");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let h = 0;
let m = 0;
let s = 0;
let ms = 0;

let label = "stop";
let interval;

function stopWatch () {
  ms++;
  if(ms / 10 === 1) {
    s++;
    ms = 0;
  }
  if(s / 10 === 1) {
    m++;
    s = 0;
  }
  if(m / 10 === 1) {
    h++;
    m = 0;
  }

  timer.innerHTML = h + ":" + m + ":" + s + ":" + ms;
}

//スタートボタン
start.addEventListener('click',function() {
  if(label === "stop") {
    interval = setInterval(stopWatch, 100);
    label = "start"
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = false;
  }
})

//ストップボタン
stop.addEventListener('click', function() {
  clearInterval(interval);
  label= "stop"
  stop.disabled = true;
  start.disabled = false;
  reset.disabled = false;
})

//リセットボタン
reset.addEventListener('click', function() {
  clearInterval(interval);
  label = "stop"
  reset.disabled = true;
  start.disabled = false;
  stop.disabled = false;
  timer.innerHTML = "0:0:0:0";
  h = 0;
  m = 0;
  s = 0;
  ms = 0;
})