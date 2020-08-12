const refs = {
  day: document.querySelector('[data-value="days"]'),
  hour: document.querySelector('[data-value="hours"]'),
  minute: document.querySelector('[data-value="mins"]'),
  second: document.querySelector('[data-value="secs"]'),
  btn: document.querySelector('.js-btn'),
}

class CountdownTimer{
  intervalId = null;
  isActive = false;

  constructor(obj){
    this._selector = obj.selector;
    this._targetDate = obj.targetDate;
  }
  start(){
    if(this._isActive){
      return;
    }
    this._isActive = true;
    getValues(0);

    this.intervalId = setInterval(() => {
      const currentTime = new Date();
      const time = this._targetDate - currentTime;
      getValues(time);
    },1000);
  }
}

const getValues = (time) => {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  setValues(days,hours,mins,secs);
}

const setValues = (days,hours,mins,secs) => {
  refs.day.textContent = days;
  refs.hour.textContent = hours;
  refs.minute.textContent = mins;
  refs.second.textContent = secs;
} 

const userEnter = prompt('Enter a value like Sep 17, 2020');
const currentTime = new Date();
const time = new Date(userEnter) - currentTime;

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(userEnter),
});

timer.start();

