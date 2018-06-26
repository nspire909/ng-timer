import { Injectable } from '@angular/core';
import { interval, merge, Observable, BehaviorSubject, Subject, NEVER, EMPTY } from 'rxjs';
import { switchMap, scan, takeWhile, startWith, mapTo, takeUntil } from 'rxjs/operators';
import { Unit } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  startTime = 0;

  units = Unit.Milliseconds;

  interval = 100;

  timeFormat = 'mm:ss.SSS';

  countdown = false;

  autostart = false;

  locale = 'en-US';

  timer$: Observable<number>;

  pause$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  reset$: Subject<void> = new Subject();

  constructor() { }

  start() {
    const interval$ = interval(this.interval).pipe(
      startWith(0),
      mapTo(this.countdown ? -1 : 1),
      takeUntil(this.reset$)
    );

    const startTimeMS = this.units === Unit.Seconds
      ? this.startTime * 1000
      : this.units === Unit.Minutes
        ? this.startTime * 1000 * 60
        : this.units === Unit.Hours
          ? this.startTime * 1000 * 60 * 60
          : this.startTime;

    this.pause$.next(false);

    this.timer$ = merge(this.pause$)
      .pipe(
        switchMap(val => (!val ? interval$ : EMPTY)),
        scan((acc, curr) => (curr ? curr + acc : acc), startTimeMS / this.interval),
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
