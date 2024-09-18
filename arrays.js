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
  let arr = this
  let h1 = arr[0],
     h2 = arr[1];
  for(let n=0;n<arr.length;n++) {
    if(typeof arr[n] != "number") {
      throw "Invalid data type detected!"
    }
    if(h1<h2) {
      let sub = h1
      h1 = h2
      h2 = sub
    }
    if(h1 < arr[n]) {
      h1 = arr[n]
    } else if(h2 < arr[n] && arr[n] != h1) {
      h2 = arr[n]
    }
  }
  return `${h1}`
}
