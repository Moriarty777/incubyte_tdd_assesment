export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  if (!numbers.includes(",")) {
    return parseInt(numbers, 10);
  }

  const nums = numbers.split(",").map((num) => parseInt(num, 10));
  return nums[0] + nums[1];
}
