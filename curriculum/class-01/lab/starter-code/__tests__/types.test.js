const {
  isNumber,
  isString,
  castToNumber,
  castToString,
  getCaster
} = require('../lib/types.js');

describe('validator module', () => {
  describe('basic validation', () => {
    it('properly tells if a value is a numbers', () => {
      expect(isNumber(3)).toBeTruthy();
      expect(isNumber('hi')).toBeFalsy();
      expect(isNumber([])).toBeFalsy();
      expect(isNumber({})).toBeFalsy();
      expect(isNumber(() => {})).toBeFalsy();
      expect(isNumber(true)).toBeFalsy();
    });

    it('tells if a value is a string', () => {
      expect(isString('hi')).toBeTruthy();
      expect(isString('')).toBeTruthy();
      expect(isString('456')).toBeTruthy();
      expect(isString('true')).toBeTruthy();
      expect(isString('false')).toBeTruthy();
      expect(isString('null')).toBeTruthy();
      expect(isString('number')).toBeTruthy();

      expect(isString(1)).toBeFalsy();
      expect(isString(true)).toBeFalsy();
      expect(isString(false)).toBeFalsy();
      expect(isString(null)).toBeFalsy();
      expect(isString(undefined)).toBeFalsy();
      expect(isString(NaN)).toBeFalsy();
      expect(isString({ 'hello': 'hello' })).toBeFalsy();
      expect(isString({})).toBeFalsy();
      expect(isString(['yes', 'maybe'])).toBeFalsy();
      expect(isString([])).toBeFalsy();
    });
  });

  describe('casters', () => {
    it('can cast values to a number', () => {
      expect(castToNumber(3)).toEqual(3);
      expect(castToNumber('3')).toEqual(3);
      expect(castToNumber(true)).toEqual(1);
      expect(castToNumber(false)).toEqual(0);
    });

    it('throws if value is not castable to number', () => {
      expect(() => castToNumber('hi')).toThrowErrorMatchingSnapshot();
      expect(() => castToNumber({})).toThrowErrorMatchingSnapshot();
    });
  });

  it('can get the right caster', () => {
    expect(getCaster(Number)).toEqual(castToNumber);
    expect(getCaster(Promise)).toBeNull();
  });

  it('casts value to a string', () => {
    expect(castToString('yes').toEqual('yes'));
    expect(castToString(4).toEqual('4'));
    expect(castToString(true).toEqual('true'));
    expect(castToString(false).toEqual('false'));
    expect(castToString(.545).toEqual('.545'));
    expect(castToString(null).toEqual('null'));
    expect(castToString('undefined').toEqual('undefined'));
    expect(castToString(NaN).toEqual('NaN'));
  });
});
