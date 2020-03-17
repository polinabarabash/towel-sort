
// You should implement your task here.

module.exports = function towelSort (matrix) {
  //if matrix exist
  if (!matrix || matrix.length == 0) {
    return [];
  }

  let result = [];
  for (i=0; i<matrix.length; i++) {
    if (i% 2 == 1) {
      let elMatrix = matrix[i].reverse();
      //concat - add to an array      
      result = result.concat(elMatrix);
    } else {
      result = result.concat(matrix[i]);
    }    
  } return result;  
}
