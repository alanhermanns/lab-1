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

    if(!object[this.field]){
      throw new Error(`No ${this.field} in the object`);
    }
    if(!this.required){
      throw new Error('No required paramater in the construction');
    }
    let caster = getCaster(this.type);
    if(!caster(object[this.field])){
      throw new Error('Wrong type in object field');
    }
    return caster(object[this.field]);
  }

}

class Schema {
  constructor(schema)
  {
    this.properties = Object.entries(schema).map(([field, options]) => new Validator(field, options)
    );
  }
  validate(obj) {
    let validated = {};
    let errors = [];

    try { this.properties.forEach(validator => {
      if(validator.validate(obj)){
        validated[validator.field] = validator.validate(obj);
      } else { errors.push(Error); }
    });
    }
    catch(error){
      return errors;
    }
    return validated;
  }
}



module.exports = {
  Validator,
  Schema
};


