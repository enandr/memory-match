//This function library manipulates arrays and objects
//Created by Roger Enand
//version 0.1
//!-------ARRAYS---------!//
Array.prototype.log = function () {
  for (var arrayLocation = 0; arrayLocation < this.length; arrayLocation++) {
    console.log(this[arrayLocation]);
  }
}
Array.prototype.flip = function () {
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
      return thingToFind+" is at index "+position;
    }
    else if (position === this.length - 1 && this[position] !== thingToFind) {
      return "That item does not exist"
    }
  }
}
Array.prototype.removeItem = function (array, thingToRemove) {
  for (var position = 0; position < this.length; position++) {
    if (this[position] === thingToRemove) {
      this.splice(position, 1);
      return this;
    }
    else if (position === this.length - 1 && this[position] !== thingToRemove) {
      return "That item does not exist"
    }
  }
}
Array.prototype.addItem = function (whereToAdd, thingToAdd) {
  if (whereToAdd === "end") {
    this.push(thingToAdd);
    return this;
  }
  else if (whereToAdd === "start") {
    this.unshift(thingToAdd);
    return this;
  }
  }
Array.prototype.changeItem = function(itemToChange,valueToChange){
    for (var position = 0; position < this.length; position++) {
      if (this[position] === itemToChange) {
        this[position] = valueToChange;
        return this;
      }
      else if (position === this.length - 1 && this[position] !== itemToChange) {
        return "That item does not exist";
      }
  }
}
Array.prototype.toObject = function () {
  var newObj={}
  for (var index = 0;index<this.length;index++){
    newObj[index] = this[index];
  }
  return newObj;
}
