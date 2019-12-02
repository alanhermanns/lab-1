const {
  isNumber,
  castToNumber
} = require('../lib/types');

describe('types functions', () => {
  describe('is*', () => {
    it('can tell if a value is a number', () => {
      expect(isNumber(1)).toBeTruthy();
      expect(isNumber(55)).toBeTruthy();
      expect(isNumber(1.55)).toBeTruthy();
      expect(isNumber(-55)).toBeTruthy();
      expect(isNumber(NaN)).toBeTruthy();
      expect(isNumber('55')).toBeFalsy();
      expect(isNumber('hi')).toBeFalsy();
      expect(isNumber(true)).toBeFalsy();
      expect(isNumber(() => {})).toBeFalsy();
      expect(isNumber({})).toBeFalsy();
      expect(isNumber([])).toBeFalsy();
      expect(isNumber(null)).toBeFalsy();
      expect(isNumber(Symbol('hi'))).toBeFalsy();
    });
  });

  describe('castTo*', () => {
    it('can cast to a number', () => {
      expect(castToNumber(1)).toEqual(1);
      expect(castToNumber('55')).toEqual(55);
      expect(castToNumber(Math.PI)).toEqual(Math.PI);

      expect(() => castToNumber('hi')).toThrowError('Cannot cast >>hi<< to Number');
      expect(() => castToNumber(true)).toThrowError('Cannot cast >>true<< to Number');
      expect(() => castToNumber({})).toThrowError('Cannot cast >>[object Object]<< to Number');
      expect(() => castToNumber('')).toThrowError('Cannot cast >><< to Number');

    });
  });
});
