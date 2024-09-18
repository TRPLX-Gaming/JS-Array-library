//increases all the elements of specified array by a factor(if given) else it
//increases by 1(default)
Array.prototype.increaseAll = function(factor=1) {
  let arr = this
  for(let n=0;n<arr.length;n++) {
    if(typeof arr[n] != "number") {
      throw "Invalid data type detected!"
    }
    arr[n] += factor
  }
  return arr;
}

//extracts the highest numeric value in an array
Array.prototype.getHighest = function() {
  let arr = this;
  let h1 = arr[0];
  

}
