const isNumber = val => typeof val === 'number';

const castToNumber = val => {
  if(isNumber(val)) return val;
  const number = Number(val);
  if(isNaN(number)) throw new CastError(Number, val);
  return number;
};

const isString = val => typeof val === 'string';

const castToString = val => {
  if(isString(val)) return val;
  const stringifiedValue = String(`${val}`);
  if(isNumber(val) && val % 1 != 0 && !isNaN(val)){

    const newString = stringifiedValue.slice(1);
    return newString;
  }
  return stringifiedValue;
};

const isBoolean = val => typeof val === 'boolean';

class CastError extends Error {
  constructor(Type, value) {
    const type = Type.name;
    super(`Cannot cast >>${value}<< to ${type}`);
    this.type = type;
    this.value = value;
  }
}

const casters = {
  Number: castToNumber,
  String: castToString,
};

const getCaster = Type => {  
  return casters[Type.name] || null;
};

module.exports = {
  isNumber,
  isString,
  isBoolean,
  CastError,
  getCaster,
  castToNumber,
  castToString,
};
