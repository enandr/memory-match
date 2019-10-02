//This function library manipulates arrays and objects
//Created by Roger Enand
//version 0.1

//manipulateArray is an object with functions designed to manipulate and create arrays
Array.prototype.log = function () {
  for (var arrayLocation = 0; arrayLocation < this.length; arrayLocation++) {
    console.log(this[arrayLocation]);
  }
}
Array.prototype.reverse = function () {
  var reversedArray = [];
  for (var arrayLocation = this.length - 1; arrayLocation >= 0; arrayLocation--) {
    reversedArray.push(this[arrayLocation]);
  }
  for (arrayLocation = 0; arrayLocation < reversedArray.length; arrayLocation++) {
    this[arrayLocation] = reversedArray[arrayLocation];
  }
  return this;
}
Array.prototype.shuffle = function () {
  var newPos = 0;
  var tempVar = 0;
  for (var position = this.length - 1; position >= 0; position--) {
    newPos = Math.floor(Math.random() * (position + 1));
    tempVar = this[position];
    this[position] = this[newPos];
    this[newPos] = tempVar;
  }
  return this;
}
Array.prototype.findPositon = function (thingToFind) {
  for (var position = 0; position < this.length; position++) {
    if (this[position] === thingToFind) {
      this.splice(position, 1);
      return array;
    }
    else if (position === array.length - 1 && array[position] !== thingToRemove) {
      return "That item does not exist"
    }
  }
}
Array.prototype.removeItem = function (array, thingToRemove) {
  for (var position = 0; position < array.length; position++) {
    if (array[position] === thingToRemove) {
      array.splice(position, 1);
      return array;
    }
    else if (position === array.length - 1 && array[position] !== thingToRemove) {
      return "That item does not exist"
    }
  }
}
Array.prototype.addItem = function (whereToAdd, thingToAdd) {
  var obj = {
    start: function () {
      this.unshift(thingToAdd);
      console.log(this);
      return this;
    },
    end: function () {
      this.push(thingToAdd);
      console.log(this);
      return this;
    }
  }
  obj[whereToAdd];
}
Array.prototype.changeItem = {
  atIndex: function (array, indexToChange, valueToChange) {
    if (indexToChange >= array.length) {
      return "That index does not exist";
    }
    else {
      array[indexToChange] = valueToChange;
      return array;
    }

  },
  //finds the item in the index and changes it
  atItem: function (array, itemToChange, valueToChange) {
    for (var position = 0; position < array.length; position++) {
      if (array[position] === itemToChange) {
        array[position] = valueToChange;
        return array;
      }
      else if (position === array.length - 1 && array[position] !== itemToChange) {
        return "That item does not exist";
      }
    }
  }
}
