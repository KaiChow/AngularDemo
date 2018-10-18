import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer-child',
  templateUrl: './timer-child.component.html',
  styleUrls: ['./timer-child.component.css']
})
export class TimerChildComponent implements OnInit, OnDestroy {

  constructor() { }
  intervalId = 0; message = "";seconds = 11;
  clearTimer() {
    clearInterval(this.intervalId)
  }
  ngOnInit() {
    this.start();
  }
  ngOnDestroy() { this.clearTimer();}
  start() {this.countDown();}
  stop() { this.clearTimer(); this.message = `Holding at T-${this.seconds} seconds`;}
  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = "Blash off"
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        }
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }

}
