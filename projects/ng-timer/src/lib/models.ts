import { interval, merge, Observable, BehaviorSubject, Subject, NEVER, EMPTY } from 'rxjs';
import { switchMap, scan, takeWhile, startWith, mapTo, takeUntil } from 'rxjs/operators';

export enum Unit {
  Milliseconds = 'ms',
  Seconds = 's',
  Minutes = 'm',
  Hours = 'h',
}

export interface SelectListItem<T> {
  name: string;
  value: T;
}

export interface TimerOptions {
  startTime?: number;
  units?: Unit;
  interval?: number;
  timeFormat?: string;
  countdown?: boolean;
  autostart?: boolean;
  locale?: string;
}

export interface Timer extends TimerOptions {
  timer$: Observable<number>;
  pause$: BehaviorSubject<boolean>;
  reset$: Subject<void>;
}

export interface Timers {
  [key: string]: Timer;
}
