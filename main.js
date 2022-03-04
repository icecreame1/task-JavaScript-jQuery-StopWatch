let timer = document.getElementById("timer");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let h = 0;
let m = 0;
let s = 0;
let ms = 0;

let new_h = 0;
let new_m = 0;
let new_s = 0;

let label = "stop";
let interval;

function stopWatch () {
  ms++;
  if(ms / 10 === 1) {  //100ms*10=1s
    s++;
    ms = 0;
  }
  if(s / 60 === 1) {
    m++;
    s = 0;
  }
  if(m / 60 === 1) {
    h++;
    m = 0;
  }

  if(s < 10) {
    new_s = "0" + s;
  } else {
    new_s = s;
  }

  if(m < 10) {
    new_m = "0" + m;
  } else {
    new_m = m;
  }

  if(h < 10) {
    new_h = "0" + h;
  } else {
    new_h = h;
  }

  timer.innerHTML = new_h + ":" + new_m + ":" + new_s + ":" + ms;
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
  timer.innerHTML = "00:00:00:0";
  h = 0;
  m = 0;
  s = 0;
  ms = 0;
})