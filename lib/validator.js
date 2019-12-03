const { getCaster, 
  castToBoolean, 
  castToString, 
  castToNumber,
  isNumber,
  isString,
  isBoolean,
  isObject,
  isArray,
  isFunction } = require('./types');

const casters = {
  Number: castToNumber,
  String: castToString,
  Boolean : castToBoolean,
};
  
export class Validator {
  constructor(field, {
    type,
    required
  }){
    this.field = field;
    this.type = type;
    this.required = required;
  }
  validate(object){
    let caster;
    if(isNumber(this.type)) { 
      caster = getCaster(Number); 
    }
    if(isBoolean(this.type)){
      caster = getCaster(Boolean);
    }
    if(isString(this.type)){
      caster = getCaster(String);
    }
    if(caster(object[this.field])){ 
      return caster(object[this.field]);
    }
  }
}
