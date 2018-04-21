let chronometer = new Chronometer();
let btnLeft     = document.getElementById('btnLeft');
let btnRight    = document.getElementById('btnRight');
let minDec      = document.getElementById('minDec');
let minUni      = document.getElementById('minUni');
let secDec      = document.getElementById('secDec');
let secUni      = document.getElementById('secUni');
let milDec      = document.getElementById('milDec');
let milUni      = document.getElementById('milUni');


function printTime() {
  let print = setInterval( () => {
    printSeconds();
    printMinutes();
  }, 1000);
}

function printMinutes() {
  let timeMin = chronometer.twoDigitsNumber(chronometer.setMinutes());
  minDec.innerHTML = timeMin[0];
  minUni.innerHTML = timeMin[1];
  console.log(minDec.innerHTML + minUni.innerHTML);
}

function printSeconds() {
  let timeSec = chronometer.twoDigitsNumber(chronometer.setSeconds());
  secDec.innerHTML = timeSec[0];
  secUni.innerHTML = timeSec[1];
  console.log(secDec.innerHTML + secUni.innerHTML);
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
  printTime();
  btnLeft.setAttribute('class', 'btn stop');
  btnLeft.innerHTML = 'STOP';
  chronometer.startClick();
}

function setSplitBtn() {
  btnRight.setAttribute('class', 'btn split');
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.setAttribute('class', 'btn start');
  btnLeft.innerHTML = 'START';
  chronometer.stopClick();
}

function setResetBtn() {
  btnRight.setAttribute('class', 'btn reset');
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.getAttribute('class') === 'btn start') {
    setStopBtn();
  } else {
    setStartBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.getAttribute('class') === 'btn reset') {
    setSplitBtn();
  } else {
    setResetBtn();
  }
});
