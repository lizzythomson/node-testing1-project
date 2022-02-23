const utils = require('./index');

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
    const actual = utils.trimProperties(input);
    expect(actual).toMatchObject(expected);
  });
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { hello: 'hello', world: 'world' };
    const expected = { hello: 'hello', world: 'world' };
    const actual = utils.trimProperties(input);
    expect(actual).toMatchObject(expected);
    expect(actual).not.toBe(expected);
  });
});

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toMatchObject(expected);
  });
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { hello: 'hello', world: 'world' };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toBe(input);
  });
});

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [
      { integer: 2 },
      { integer: 5 },
      { integer: 3 },
      { integer: 8 },
      { integer: 6 },
    ];
    const expected = 8;
    const actual = utils.findLargestInteger(input);
    expect(actual).toEqual(expected);
  });
});

describe('[Exercise 4] Counter', () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh couter
  });
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const actual = counter.countDown();
    expect(actual).toEqual(3);
  });
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown();
    const actual = counter.countDown();
    expect(actual).toEqual(2);
  });
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown();
    counter.countDown();
    counter.countDown();
    counter.countDown();
    const actual = counter.countDown();
    expect(actual).toEqual(0);
  });
});

describe('[Exercise 5] Seasons', () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const returnedSeason = seasons.next();
    expect(returnedSeason).toEqual('summer');
  });
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next();
    const returnedSeason = seasons.next();
    expect(returnedSeason).toEqual('fall');
  });
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next();
    seasons.next();
    const returnedSeason = seasons.next();
    expect(returnedSeason).toEqual('winter');
  });
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next();
    seasons.next();
    seasons.next();
    const returnedSeason = seasons.next();
    expect(returnedSeason).toEqual('spring');
  });
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    const returnedSeason = seasons.next();
    expect(returnedSeason).toEqual('summer');
  });
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    const seasonCalled = (num) => {
      for (let i = 0; i <= num; i++) {
        seasons.next();
      }
    };
    seasonCalled(39);
    const returnedSeason = seasons.next();
    expect(returnedSeason).toEqual('summer');
  });
});

describe('[Exercise 6] Car', () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30); // each test must start with a fresh car
  });
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive(10)).toEqual(10);
    expect(focus.drive(6)).toEqual(16);
    expect(focus.drive(3)).toEqual(19);
  });
  test('[16] driving the car uses gas', () => {
    expect(focus.drive(30)).toEqual(30);
    expect(focus.tank).toBe(19);
  });
  test('[17] refueling allows to keep driving', () => {
    expect(focus.drive(600)).toEqual(600);
    expect(focus.drive(50)).toEqual(600);
    expect(focus.refuel(10)).toEqual(300);
    expect(focus.drive(50)).toEqual(650);
  });
  test('[18] adding fuel to a full tank has no effect', () => {
    expect(focus.refuel(10)).toEqual(600);
  });
});

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    expect(await utils.isEvenNumberAsync(8)).toEqual(true);
    expect(await utils.isEvenNumberAsync(18)).toEqual(true);
    expect(await utils.isEvenNumberAsync(888)).toEqual(true);
  });
  test('[20] resolves false if passed an odd number', async () => {
    expect(await utils.isEvenNumberAsync(7)).toEqual(false);
    expect(await utils.isEvenNumberAsync(333)).toEqual(false);
    expect(await utils.isEvenNumberAsync(1234567)).toEqual(false);
  });
});
