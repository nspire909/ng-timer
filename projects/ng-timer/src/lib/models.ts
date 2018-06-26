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
