import { Injectable } from '@angular/core';
import { interval, merge, BehaviorSubject, Subject, NEVER, EMPTY } from 'rxjs';
import { switchMap, scan, takeWhile, startWith, mapTo, takeUntil, take } from 'rxjs/operators';
import { Unit, TimerOptions, Timer, Timers } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private defaultTimer: Timer = {
    startTime: 0,
    units: Unit.Milliseconds,
    interval: 100,
    timeFormat: 'mm:ss.SSS',
    countdown: false,
    autostart: false,
    locale: 'en-US',
    timer$: NEVER,
    pause$: new BehaviorSubject(true),
    reset$: new Subject(),
    // addTime$: new BehaviorSubject(1),
  };

  timers: Timers = {};

  newTimer(timerName: string, timerOptions?: TimerOptions) {
    if (timerName && !this.timers[timerName]) {
      this.timers[timerName] = {
        ...this.defaultTimer,
        ...timerOptions
      };
    }
  }

  start(timerName: string) {
    const timer = this.timers[timerName];

    if (timer) {
      // timer.addTime$.next((timer.countdown ? -1 : 1));

      const interval$ = interval(timer.interval).pipe(
        startWith(0),
        mapTo((timer.countdown ? -1 : 1)),
        // switchMap(val => timer.addTime$),
        takeUntil(timer.reset$)
      );

      timer.pause$.next(false);

      timer.timer$ = merge(timer.pause$)
        .pipe(
          switchMap(val => (!val ? interval$ : EMPTY)),
          scan((acc, curr) => (curr ? curr + acc : acc), this.startTimeMS(timerName) / timer.interval),
          takeUntil(timer.reset$),
          takeWhile(t => t >= 0)
        );
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
