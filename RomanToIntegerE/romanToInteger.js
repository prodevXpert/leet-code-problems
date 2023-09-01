var romanToInt = function (s) {
    function getValue(character) {
      switch (character) {
        case "I":
        case "i":
          return 1;
        case "V":
        case "v":
          return 5;
        case "X":
        case "x":
          return 10;
        case "L":
        case "l":
          return 50;
        case "C":
        case "c":
          return 100;
        case "D":
        case "d":
          return 500;
        case "M":
        case "m":
          return 1000;
        default:
          break;
      }
    }
    
    let total = 0;
    for (let i = 0; i < s.length; i++) {
      if (getValue(s[i]) >= getValue(s[i + 1]) || i === s.length - 1) {
        total += getValue(s[i]);
      } else {
        total -= getValue(s[i]);
      }
    }
    
    return total;
  };
  
  console.log(romanToInt("XVII")); // Output: 14
  