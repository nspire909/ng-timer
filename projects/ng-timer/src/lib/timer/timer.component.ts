import { Component, OnInit, Input, Output } from '@angular/core';
import { interval, merge, Observable, BehaviorSubject, Subject, NEVER, EMPTY } from 'rxjs';
import { switchMap, scan, takeWhile, startWith, mapTo, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ng-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input()
  startTime = 0;

  @Input()
  interval = 100;

  @Input()
  timeFormat = 'mm:ss.SSS';

  private _countdown = false;

  @Input()
  set countdown(value: boolean | string) {
    this._countdown = value !== 'false' && value !== false;
  }
  get countdown() {
    return this._countdown;
  }

  private _autostart = false;

  @Input()
  set autostart(value: boolean | string) {
    this._autostart = value !== 'false' && value !== false;
  }
  get autostart() {
    return this._autostart;
  }

  @Input()
  locale = 'en-US';

  @Output()
  timer$: Observable<number>;

  @Output()
  pause$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  @Output()
  reset$: Subject<void> = new Subject();

  show = true;

  constructor() { }

  ngOnInit() {
    if (this.autostart) {
      this.start();
    }
  }

  start() {
    const interval$ = interval(this.interval).pipe(
      startWith(0),
      mapTo(this.countdown ? -1 : 1),
      takeUntil(this.reset$)
    );

    this.pause$.next(false);

    this.timer$ = merge(this.pause$)
      .pipe(
        switchMap(val => (!val ? interval$ : EMPTY)),
        scan((acc, curr) => (curr ? curr + acc : acc), this.startTime / this.interval),
        takeUntil(this.reset$),
        takeWhile(t => t >= 0)
      );
  }

  stop() {
    this.timer$ = NEVER;
  }

  toggle() {
    this.pause$.next(!this.pause$.value);
  }
}
