const utils = require('./index');

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { hello: 'hello', world: 'world' };
    const expected = { hello: 'hello', world: 'world' };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
    expect(actual).not.toBe(expected);
  });
});

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toEqual(expected);
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
    expect(actual).toBe(expected);
  });
});

describe('[Exercise 4] Counter', () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh couter
  });
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {});
  // test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {})
  // test('[8] the count eventually reaches zero but does not go below zero', () => {})
});

// describe('[Exercise 5] Seasons', () => {
//   let seasons;
//   beforeEach(() => {
//     seasons = new utils.Seasons(); // each test must start with fresh seasons
//   });
//   // test('[9] the FIRST call of seasons.next returns "summer"', () => {})
//   // test('[10] the SECOND call of seasons.next returns "fall"', () => {})
//   // test('[11] the THIRD call of seasons.next returns "winter"', () => {})
//   // test('[12] the FOURTH call of seasons.next returns "spring"', () => {})
//   // test('[13] the FIFTH call of seasons.next returns again "summer"', () => {})
//   // test('[14] the 40th call of seasons.next returns "spring"', () => {})
// });

// describe('[Exercise 6] Car', () => {
//   let focus;
//   beforeEach(() => {
//     focus = new utils.Car('focus', 20, 30); // each test must start with a fresh car
//   });
//   // test('[15] driving the car returns the updated odometer', () => {
//   // expect(focus.drive(10)).toBe(10)
//   // expect(focus.drive(6)).toBe(16)
//   // expect(focus.drive(4)).toBe(20)
//   // test('[16] driving the car uses gas', () => {})
//   // test('[17] refueling allows to keep driving', () => {})
//   // test('[18] adding fuel to a full tank has no effect', () => {})
// });

// // describe('[Exercise 7] isEvenNumberAsync', async () => {
// // test('[19] resolves true if passed an even number', () => {
// // expect(await )
// // })
// // test('[20] resolves false if passed an odd number', () => {})
// // });

// // test('[21] driving a distance adds miles to the odometer', () => {
// // expect(focus.odometer).toBe(0)
// // focus.drive(15)
// //   expect(focus.odometer).toBe(15)
// //   focus.drive(4)
// //   expect(focus.odometer).toBe(19)
// // })
