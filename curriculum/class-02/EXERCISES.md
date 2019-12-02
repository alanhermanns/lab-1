# Class exercises

## Exercise 1

* create a `Car` class in `Car.js` and `Car.test.js`
* `Car` has a make, model, year, color, miles
  * make, model, year, color are passed to the constructor
  * miles is set at 0 initially
  * test that a new `Car` has the expected
    make, model, year, miles, and color properties
* `Car` has a `drive` method that takes `drivenMiles`
  * increment the `miles` property by the `drivenMiles` parameter
  * test after calling `drive` that miles is what you expect
* `Car` has a `makes` static methods
  * `makes` returns an array of valid car makes
    (e.g. 'Honda', 'Ford', etc.)
* BONUS: Update `Car` constructor so if make is not a valid
  make (from your `makes` static method), it throws an error

## Exercise 2

```js
const ryansColors = new Colors();
ryansColors.addColor('red');
ryansColors.addColor('blue');

ryansColors.hasColor('blue');
ryansColors.hasColor('green')
```

* Create a `Colors` class
* colors has a `favorites` property
  * initialize `favorites` as an empty array
* `addColor` method takes a `color` parameter
  * `addColor` pushes `color` to the array of `favorites`
* `hasColor` method takes a `color` parameter
  * `hasColor` returns true if `favorites` `includes` `color`
  * `hasColor` returns false if `favorites` does not `includes` `color`
