# MongoDB and Mongoose

## Resources

* [What is mongodb?](https://www.mongodb.com/what-is-mongodb)
* [Documents](https://docs.mongodb.com/manual/core/document/)

## Agenda

* What is a database?
* SQL vs noSQL
* What is MongoDB?
* Mongoose

## Database

A database is a collection of related data.

## SQL vs noSQL

* uses sql vs uses another query language
* fixed vs dynamic schemas
* rows/columns vs collections/documents
  * excel vs json
* Vertical vs Horizontal scaling

## MongoDB

* Collection / Document based data model
* Data is stored in JSON like documents

### DB vs Collection vs Document

* Databases hold collections
* Collections hold documents
* Documents hold data


## Mongoose

Mongoose is an ODM (Object Document Mapping). It creates a map
of documents (from MongoDB) to objects in JavaScript.

### Schema

A schema maps to a MongoDB collection and specifies the shape
each document in that collection should take. The schema defines
the fields and types that each document should have with a
provided object DSL (Domain Specific Language). The supported
types are:

* String
* Number
* Date
* Boolean
* ObjectId
* Buffer
* Mixed
* Array
  * { type: [String] } **DONT** { type: Array }
* Decimal128
* Map

### Validators

#### Built in

* `required` - makes the field non-optional
* `unique` - makes the field unique
* `default` - gives the field a default value if not specified
* `select` - boolean whether the field should returned
* `validate` - function to validate the field

##### String only

* `lowercase` - make the field always lowercase
* `uppercase` - make the field always uppercase
* `trim` - trim off whitespace
* `match` - regex that the field must match
* `enum` - array of strings that the field must match
* `minlength` - minimum length of field
* `maxlength` - maximum length of field

##### Number only

* `min` - field must be greater than or equal to min
* `max` - field must be less than or equal to max

##### Date only

* `min`
* `max`

#### Custom

A custom validate function can be added to a field:

```js
var personSchema = new Schema({
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    required: [true, 'Person phone number required']
  }
});
```
