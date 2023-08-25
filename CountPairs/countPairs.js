const countPairs = function (nums, target) {
  let pairCount = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) {
        pairCount++;
      }
    }
  }
  return pairCount;
};

const result = countPairs([-1, 1, 2, 3, 1], 2);
console.log(result);
