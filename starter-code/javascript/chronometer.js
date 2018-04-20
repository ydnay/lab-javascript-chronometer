// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

// cannot change to arrow function or it won't pass tests.
Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval( () => {
    this.setTime();
    this.currentTime++;
  }, 1000);
};

Chronometer.prototype.setMinutes = function () {
  return this.minutes = Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return this.seconds = this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  this.string = value.toString();
  if (this.string.length === 1) {
    return '0' + this.string;
  }

  return this.string;
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes);
  this.seconds = this.twoDigitsNumber(this.setSeconds);
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
