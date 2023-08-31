var reverse = function (x) {
  if (x > Math.pow(2, 31) - 1 || x < Math.pow(-2, 31)) {
    return 0;
  } else if (x === 0) {
    return x;
  } else if (x < 0) {
    x = Math.abs(x);
    let reversedNumber = "-";
    while (x >= 1) {
      let temp = Math.floor(x % 10);
      reversedNumber += temp;
      x = Math.floor(x / 10);
    }
    return parseInt(reversedNumber);
  } else {
    let reversedNumber = "";
    while (x >= 1) {
      let temp = Math.floor(x % 10);
      reversedNumber += temp;
      x = Math.floor(x / 10);
    }
    return parseInt(reversedNumber);
  }
};

console.log(reverse(1534236469));
