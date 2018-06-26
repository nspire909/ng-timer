import { Component, Input, OnInit } from '@angular/core';
import { TimerService } from '../timer/timer.service';
import { Timer } from '../models';

@Component({
  selector: 'ng-timer-controls',
  templateUrl: './timer-controls.component.html',
  styleUrls: ['./timer-controls.component.scss']
})
export class TimerControlsComponent implements OnInit {
  @Input()
  name = 'timer';
  timer: Timer;

  constructor(public timerService: TimerService) {}

  ngOnInit() {
    this.timer = this.timerService.timers[this.name];
  }
}
