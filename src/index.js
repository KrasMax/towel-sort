
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let resArr = [];

  // console.log(matrix.length);

  if (matrix === undefined || matrix.length === 0) {

    return resArr

  } else {

    matrix.forEach((element, index) => {
      if (index % 2) {
        let subArr = element.reverse();
        subArr.forEach(elem => {
          resArr.push(elem)
        })
      } else {
        element.forEach(eleme => {
          resArr.push(eleme)
        })
      }

    });

    return resArr;

  }




}
