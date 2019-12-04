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
  constructor(first, [...fields])
  {
    this.first = first;
    this.fields = fields.map(field => {
      return new Validator(field);
    });
  }

  validate(first) {
    if(this.fields.forEach(field => {
      field.validate();
    }));
    return this.fields;
  } 
}



module.exports = {
  Validator,
  Schema
};


