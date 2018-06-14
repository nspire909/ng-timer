import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'ng-timer-input',
  templateUrl: './timer-input.component.html',
  styleUrls: ['./timer-input.component.scss']
})
export class TimerInputComponent {
  @Input()
  startTime = 0;

  @Output()
  startTimeChange: EventEmitter<number> = new EventEmitter<number>();

  startTimeChanged(newValue: number) {
    this.startTimeChange.emit(newValue);
  }
}
