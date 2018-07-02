import { Component } from '@angular/core';
import { TimerService, Unit } from '@devrec/ng-timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'myTimer';
  isDarkTheme = true;

  timeFcn = (x => {
    if (x === 31000 || x === 30000 || x === 29000) {
      console.log(x);
    } else if (x === 2000) {
      console.log(x);
    } else if (x === 0) {
      console.log(x);
    }
  });

  constructor(timerService: TimerService) {
    timerService.newTimer(this.name, {
      startTime: 15,
      units: Unit.Minutes,
      countdown: true,
      autostart: false,
      timeFormat: 'mm:ss'
    });
  }
}
