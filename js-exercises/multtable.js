//multiplication table sized according to the given dimensions. **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.

function multiplicationTable(width, height){
  var table = [];
  var row = [];
  
  for (i = 0; i < width; i++){
    for (j = 0; j < height; j++){
      row.push((i + 1)*(j + 1));
    }
    table.push(row);
    row = [];
  }
  return table;
}

let result = multiplicationTable(3,3);
console.log(result);
