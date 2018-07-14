import { Injectable } from '@angular/core';
import { interval, merge, BehaviorSubject, Subject, NEVER, EMPTY, Observable } from 'rxjs';
import { switchMap, scan, takeWhile, startWith, mapTo, takeUntil, map } from 'rxjs/operators';
import { Unit, TimerOptions, Timer, Timers } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private defaultTimerOptions: TimerOptions = {
    startTime: 0,
    units: Unit.Milliseconds,
    timeFormat: 'mm:ss.SSS',
    countdown: false,
    autostart: false,
    interval: 100,
    locale: 'en-US',
  };

  timers: Timers = {};

  newTimer(timerName: string, timerOptions?: TimerOptions): Timer {
    if (!timerName) {
      throw(new Error('timerName required'));
    }

    if (!this.timers[timerName]) {
      this.timers[timerName] = {
        ...this.defaultTimerOptions,
        ...timerOptions,
        timer$: NEVER,
        interval$: NEVER,
        pause$: new BehaviorSubject(true),
        reset$: new Subject(),
        // addTime$: new BehaviorSubject(1),
      };
    }

    return this.timers[timerName];
  }

  start(timerName: string): Observable<number> {
    const timer = this.timers[timerName];

    if (timer) {
      timer.reset$.next();
      // timer.addTime$.next((timer.countdown ? -1 : 1));

      timer.interval$ = interval(timer.interval).pipe(
        startWith(0),
        mapTo((timer.countdown ? -1 : 1)),
        // switchMap(val => timer.addTime$),
        takeUntil(timer.reset$)
      );

      timer.pause$.next(false);

      timer.timer$ = merge(timer.pause$)
        .pipe(
          switchMap(val => (!val ? timer.interval$ : EMPTY)),
          scan((acc, curr) => (curr ? curr + acc : acc), this.startTimeMS(timerName) / timer.interval),
          map(x => x * timer.interval),
          takeUntil(timer.reset$),
          takeWhile(t => t >= 0)
        );

      return timer.timer$;
    }
  }

  // addTime(timerName: string, ms: number) {
  //   const timer = this.timers[timerName];

  //   if (timer) {
  //     timer.addTime$.next((timer.countdown ? -1 : 1) * ms);
  //     timer.addTime$.next((timer.countdown ? -1 : 1));
  //   }
  // }

  stop(timerName: string) {
    const timer = this.timers[timerName];
    if (timer) {
      timer.reset$.next();
      timer.pause$.next(true);
      timer.timer$ = NEVER;
    }
  }

  toggle(timerName: string) {
    const timer = this.timers[timerName];
    if (timer) {
      timer.pause$.next(!timer.pause$.value);
    }
  }

  startTimeMS(timerName: string) {
    const timer = this.timers[timerName];

    if (timer) {
      return timer.units === Unit.Seconds
        ? timer.startTime * 1000
        : timer.units === Unit.Minutes
          ? timer.startTime * 1000 * 60
          : timer.units === Unit.Hours
            ? timer.startTime * 1000 * 60 * 60
            : timer.startTime;
    }
  }
}
