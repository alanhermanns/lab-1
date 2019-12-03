const { getCaster, 
  castToBoolean, 
  castToString, 
  castToNumber,
  isNumber,
  isString,
  isBoolean,
  isObject,
  isArray,
  isFunction } = require('../lib/types');

const { Validator } = require('../lib/validator');


const cat = {
  name : 'Sugar',
  age : 4,
  breed : 'Calico'
};
const nameValidator = new Validator('name', {
  type : String,
  required : true
});
const ageValidator = new Validator('age', {
  type : Number,
  required : true
});
const breedValidator = new Validator('breed', {
  type : String,
  required : true
});

describe('validate method on Validator class', () => {
  it('properly validates an object', () => {
    expect(nameValidator.validate(cat)).toEqual('Sugar');
    expect(ageValidator.validate(cat)).toEqual(4);
    expect(breedValidator.validate(cat)).toEqual('Calico');
  });
});
