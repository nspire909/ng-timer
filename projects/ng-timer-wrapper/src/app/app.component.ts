import { Component } from '@angular/core';
import { Unit } from '../../../ng-timer/src/lib/models';
import { TimerService } from '@devrec/ng-timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'myTimer';
  isDarkTheme = true;

  constructor(timerService: TimerService) {
    timerService.newTimer(this.name, {
      startTime: 60,
      units: Unit.Seconds,
      countdown: true,
      timeFormat: 'mm:ss.SSS'
    });
  }
}
