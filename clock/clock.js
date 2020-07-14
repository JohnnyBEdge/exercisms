//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export class Clock {
  constructor(h,m = 0) {
    this.timeInMin = h * 60 + m;
  };

  get h(){
    let h = Math.floor((this.timeInMin)/60) % 24;
    return h < 0 ? h + 24 : h
  };

  get m(){
    let m = this.timeInMin % 60;
    return m < 0 ? m + 60 : m;
  }

  toString() {
    return `${this.h < 10 ? "0" + this.h : this.h}:${this.m < 10 ? "0" + this.m : this.m}`
  }

  plus(min) {
    this.timeInMin += min
    return this
  }

  minus(min) {
    this.timeInMin -= min
    return this;
  }

  equals(clock) {
    return this.toString() === clock.toString();
  }
}
