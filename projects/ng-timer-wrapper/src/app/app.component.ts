import { Component, ViewChild } from '@angular/core';
import { TimerComponent } from '@devrec/ng-timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  startTime = 0;

  @ViewChild(TimerComponent)
  timer;
}
