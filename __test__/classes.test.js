const { 
  Validator,
  Schema
} = require('../lib/validator');


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
const lightOrHeavyValidator = new Validator('heavy', {
  type : Boolean,
  required : true
});
const newAgeValidator = new Validator('age', {
  type : Number
});
const newNameValidator = new Validator('name', {
  type : Number,
  required : true
});

describe('validate method on Validator class', () => {
  it('properly validates an object', () => {
    expect(nameValidator.validate(cat)).toEqual('Sugar');
    expect(ageValidator.validate(cat)).toEqual(4);
    expect(breedValidator.validate(cat)).toEqual('Calico');

    expect(() => lightOrHeavyValidator.validate(cat)).toThrowErrorMatchingSnapshot(); 
    expect(() => newAgeValidator.validate(cat)).toThrowErrorMatchingSnapshot();
    expect(() => newNameValidator.validate(cat)).toThrowErrorMatchingSnapshot();
    
  });
});

const uncle = new Schema({
  age : {
    type : Number,
    required : true
  },
  state : {
    type : Boolean,
    required: true
  },
  name : {
    type : String,
    required: true
  }
});

const fred = {
  age : 50,
  state : true,
  name : 'fred'
};

const matt = {
  age : 40,
  state : true,
  profession : 'film-maker'
}

describe('validate method on Schema class', () => {
  it('properly validates an object has all the properties necessary to its fields', () => {
    expect(uncle.validate(fred)).toEqual({ age: 50, state: true, name : 'fred' });
  });
  expect(() => uncle.validate(matt)).toThrowError();
});
