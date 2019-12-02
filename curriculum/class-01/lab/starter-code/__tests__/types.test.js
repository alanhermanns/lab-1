const {
  isNumber,
  isString,
  isBoolean,
  isObject,
  castToNumber,
  castToString,
  castToBoolean,
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

    it('tells if a value is a boolean', () => {
      expect(isBoolean(true)).toBeTruthy();
      expect(isBoolean(false)).toBeTruthy();

      expect(isBoolean(1)).toBeFalsy();
      expect(isBoolean('hi')).toBeFalsy();
      expect(isBoolean(null)).toBeFalsy();
      expect(isBoolean(undefined)).toBeFalsy();
      expect(isBoolean({ 'false': false })).toBeFalsy();
      expect(isBoolean({ 'true': true })).toBeFalsy();
      expect(isBoolean([true])).toBeFalsy();
      expect(isBoolean([])).toBeFalsy();
      expect(isBoolean({})).toBeFalsy();
    }); 

    it('tells if input is an object', () => {
      expect(isObject({})).toBeTruthy();
      expect(isObject({ 
        'dog' : 1,
        'cat' : 4,
        'mouse' : null
      })).toBeTruthy();

      expect(isObject(false)).toBeFalsy();
      expect(isObject(true)).toBeFalsy();
      expect(isObject('')).toBeFalsy();
      expect(isObject(5)).toBeFalsy();
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
    
    it('casts value to a string', () => {
      expect(castToString('yes')).toEqual('yes');
      expect(castToString(4)).toEqual('4');
      expect(castToString(true)).toEqual('true');
      expect(castToString(false)).toEqual('false');
      expect(castToString(.545)).toEqual('.545');
      expect(castToString(null)).toEqual('null');
      expect(castToString('undefined')).toEqual('undefined');
      expect(castToString(NaN)).toEqual('NaN');
      expect(castToString({})).toEqual('[object Object]');

    });
    
    it('casts a value to a boolean', () => {
      expect(castToBoolean(true)).toEqual(true);
      expect(castToBoolean(false)).toEqual(false);
      expect(castToBoolean(1)).toEqual(true);
      expect(castToBoolean(0)).toEqual(false);
      expect(castToBoolean(NaN)).toEqual(false);
      expect(castToBoolean(!1)).toEqual(false);
    });
    
  });
  
  it('can get the right caster', () => {
    expect(getCaster(Number)).toEqual(castToNumber);
    expect(getCaster(Promise)).toBeNull();
  });

});
