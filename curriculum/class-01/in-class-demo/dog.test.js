const { createDog } = require('./dog');

describe('dog tests', () => {
  it('expects true when things are true', () => {
    expect(true).toBeTruthy();
  });

  it('creates a dog with a name, age, and weight', () => {
    const dog = createDog('spot', 5, '20 lbs');
    // expect(dog).toEqual({
    //   name: 'spot',
    //   age: 5,
    //   weight: '20 lbs'
    // });

    expect(dog).to

   });
});
