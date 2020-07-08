import { TestScheduler } from 'rxjs/testing';

export function getTestScheduler(): TestScheduler {
  return new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });
}
