import { Component } from '@angular/core';
import { Unit } from '../../../ng-timer/src/lib/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  startTime = 60;
  units = Unit.Seconds;
  countdown = true;
  timeFormat = 'mm:ss.SSS';
}
