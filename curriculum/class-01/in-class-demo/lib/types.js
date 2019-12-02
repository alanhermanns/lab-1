const isNumber = value => typeof value === 'number';
const isBoolean = value => typeof value === 'boolean';

const castToNumber = value => {
  if(isNumber(value)) return value;
  
  const convertedNumber = Number(value);
  if(value === '' || isBoolean(value) || Number.isNaN(convertedNumber)) {
    throw `Cannot cast >>${value}<< to Number`;
  }

  return convertedNumber;
};

const typesObj = {
  Number: castToNumber
};

const getCaster = type => {
  return typesObj[type.name] || null;
};

module.exports = {
  isNumber,
  castToNumber
};
