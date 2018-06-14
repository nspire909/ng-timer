import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ng-timer-controls',
  templateUrl: './timer-controls.component.html',
  styleUrls: ['./timer-controls.component.scss']
})
export class TimerControlsComponent {
  @Input()
  timer$: Observable<number>;

  @Input()
  pause$: Observable<boolean>;

  @Output()
  startTimer = new EventEmitter();

  @Output()
  stopTimer = new EventEmitter();

  @Output()
  toggleTimer = new EventEmitter();

  start() {
    this.startTimer.emit();
  }

  stop() {
    this.stopTimer.emit();
  }

  toggle() {
    this.toggleTimer.emit();
  }
}
