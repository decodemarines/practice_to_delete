const twoSum = (nums, target) =>
nums
  .reduce((acc, curr, idx) => {
    if (acc.has(target - curr)) {
      acc.set('res', [idx, acc.get(target - curr)]);
    }
    acc.set(curr, idx);
    return acc;
  }, new Map())
  .get('res');