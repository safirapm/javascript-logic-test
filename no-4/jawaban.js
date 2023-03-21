function pascalsTriangle(numRows) {
  let triangle = [];
  for (let row = 1; row <= numRows; row++) {
    let arr = [];
    for (let col = 0; col < row; col++) {
      if (col === 0 || col === row - 1) {
        arr.push(1);
      } else {
        arr.push(triangle[row - 2][col - 1] + triangle[row - 2][col]);
      }
    }
    triangle.push(arr);
  }

  for (let i = 0; i < numRows; i++) {
    let splitRow = " ".repeat(numRows - i - 1);
    let rowStr = splitRow + triangle[i].join(" ") + splitRow;
    console.log(rowStr);
  }
}

pascalsTriangle(6);
