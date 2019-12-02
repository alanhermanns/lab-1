# LAB: Models

This is the last lab in a three day series about schema and schema
validation. For this lab, you'll use Jest to test a file system
functions and a `Model` class.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

In the `starter_code` folder there is a completed version of yesterdays
lab. You can use the `starter_code` or use the code you worked on
yesterday. In either case, take a look at the `started_code` and compare
it to your code from yesterday.

## Requirements

1. file system functions
2. `Model` class

### File System Functions

* `mkdirp` - make a directory and all parent directories
* `writeJSON` - write an object to a file
* `readJSON` - read an object from a file
* `readDirectoryJSON` - read all files in a directory as objects
* `updateJSON` - update a files JSON
* `deleteFile` - delete a file

```js
async function playAround() {
  // create the my-cool-directory
  // inside of that create child
  // inside of that create more
  await mkdirp('./my-cool-directory/child/more');

  // write an object to my-dog
  await writeJSON('./my-cool-directory/child/more/my-dog', {
    name: 'spot',
    age: 5,
    weight: '20 lbs'
  });

  // write two more dogs
  await Promise.all([
    writeJSON('./my-cool-directory/child/more/my-rover', {
      name: 'rover',
      age: 10,
      weight: '40 lbs'
    }),
    writeJSON('./my-cool-directory/child/more/my-bingo', {
      name: 'bingo',
      age: 2,
      weight: '100 lbs'
    })
  ])

  let dog = await readJSON('./my-cool-directory/child/more/my-dog');

  // prints 5
  console.log(dog.age);

  const allDogs = await readDirectoryJSON('./my-cool-directory/child/more');

  // prints 3
  console.log(allDogs.length);
  //prints 'bingo'
  console.log(allDogs[2].name);

  // updates the dog saved at my-dog
  // does a merge or PATCH meaning that the name and weight
  // entries remain the same
  await updateJSON('./my-cool-directory/child/more/my-dog', {
    age: 6
  });

  dog = await readJSON('./my-cool-directory/child/more/my-dog');

  //prints 6
  console.log(dog.age);

  // delete the dog file
  await deleteFile('./my-cool-directory/child/more/my-dog')

}
```

#### Testing

These tests will be asynchronous tests. Since we'll be writing to the
file system for these tests, we'll want to make sure we clean up our
mess inside of an `afterAll` or `afterEach`. Also, do any setup inside
of a `beforeAll` or `beforeEach`

#### Implementation

Use `fsPromises` (`const fs = require('fs').promises`) to write your
functions. When writing JSON make sure to `JSON.stringify` (we can
only write strings into files). When reading JSON make sure to
`JSON.parse`.

**NOTE** it's ok if `readDirectoryJSON` returns an array of objects
in a different order each time

### Model class

* `create`
* `findById`
* `find`
* `findByIdAndUpdate`
* `findByIdAndDelete`

```js
const dogSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  weight: {
    type: String
  }
});

const Dog = new Model('Dog', dogSchema);

Dog
  .create({ name: 'spot', age: 5, weight: '20 lbs' })
  .then(createdDog => {
    // do stuff with a created dog
  });

Dog
  .find()
  .then(allDogs => {
    // do stuff with all dogs
  });

Dog
  .findById(dogId)
  .then(dog => {
    // do stuff with a dog
  });

Dog
  .findByIdAndUpdate(dogId, { name: 'rover' })
  .then(updatedDog => {
    // do stuff with the updated dog
  });

Dog
  .findByIdAndDelete(dogI)
  .then(deletedDog => {
    // do stuff with the deleted dog
  });
```

#### Testing

Mock your File System Functions. Ensure that you invoke the right
File System Functions with `expect(fsFunction).toHaveBeenCalledWith()`.
Make sure that the right arguments are passed.

#### Implementation

Use your File System Functions to interact with the File System.
Whenever a new `Model` is created make a directory to save files to.
Whenever a new item is created create a random id using `uuid`.

```js
const uuid = require('uuid/v4');
const randomId = uuid();
```

## Rubric

* File System Functions 1 point each (max 6 points)
* Model Tests 3 points
* Model implementation 1 point

## Assignment Submission Instructions

Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations

