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

}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  let left = document.getElementById('btnLeft');
  let leftAtt = left.getAttribute('class');
  if (leftAtt === 'btn start') {
    left.setAttribute('class', 'btn stop');
    left.innerHTML = 'STOP';
  } else {
    left.setAttribute('class', 'btn start');
    left.innerHTML = 'START';
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  let right = document.getElementById('btnRight');
  let rightAtt = right.getAttribute('class');
  if (rightAtt === 'btn reset') {
    right.setAttribute('class', 'btn split');
    right.innerHTML = 'SPLIT';
  } else {
    right.setAttribute('class', 'btn reset');
    right.innerHTML = 'RESET';
  }
});
