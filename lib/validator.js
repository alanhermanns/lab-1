const { getCaster
} = require('./types');

class Validator {
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
    caster = getCaster(this.type);
    return caster(object[this.field]);
  }
}
module.exports = {
  Validator
};
