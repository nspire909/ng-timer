import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Unit, SelectListItem } from '../models';

@Component({
  selector: 'ng-timer-input',
  templateUrl: './timer-input.component.html',
  styleUrls: ['./timer-input.component.scss']
})
export class TimerInputComponent {
  @Input()
  startTime = 0;

  @Input()
  units = Unit.Milliseconds;

  private _countdown = false;

  @Input()
  set countdown(value: boolean | string) {
    this._countdown = value !== 'false' && value !== false;
  }
  get countdown() {
    return this._countdown;
  }

  @Input()
  timeFormat = 'mm:ss.SSS';

  @Output()
  startTimeChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  unitsChange: EventEmitter<Unit> = new EventEmitter<Unit>();

  @Output()
  countdownChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  timeFormatChange: EventEmitter<string> = new EventEmitter<string>();

  unitTypes: SelectListItem<string>[];
  timeFormats: string[];

  constructor() {
    this.unitTypes = Object.keys(Unit)
      .filter(key => typeof Unit[key] === 'string')
      .map(key => ({ name: key, value: Unit[key] }));
    this.timeFormats = [
      'mm:ss.SSS',
      'hh:mm:ss.SSS',
      'hh:mm:ss'
    ];
  }

  startTimeChanged(newValue: number) {
    this.startTimeChange.emit(newValue);
  }

  unitsChanged(newValue: Unit) {
    this.unitsChange.emit(newValue);
  }

  countdownChanged(newValue: boolean) {
    this.countdownChange.emit(newValue);
  }

  timeFormatChanged(newValue: string) {
    this.timeFormatChange.emit(newValue);
  }
}
