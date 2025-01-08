export function add(numbers: string): number {
  console.log("Input:", numbers);

  if (numbers === "") {
    return 0;
  }

  if (!numbers.includes(",") && !numbers.includes("\n")) {
    return parseInt(numbers, 10);
  }

  const nums = numbers.split(/[,\n]+/).map((num) => parseInt(num, 10));
  return nums.reduce((sum, num) => sum + num, 0);
}
